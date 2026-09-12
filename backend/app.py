from flask import Flask, jsonify, request
from flask_cors import CORS
import razorpay
import os
from dotenv import load_dotenv
from flask_migrate import Migrate
from models import db, Product, Order, OrderItem, Transaction
import uuid
from decimal import Decimal


load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///andrinova.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)

RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

client = razorpay.Client(
    auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)
)

@app.route("/")
def home():
    return jsonify({
        "message": "Flask Razorpay backend is running"
    })

@app.route("/api/products", methods=["GET"])
def get_products():
    try:
        products = Product.query.filter_by(is_active=True).all()

        return jsonify({
            "success": True,
            "products": [
                {
                    "id": product.id,
                    "category_id": product.category_id,
                    "name": product.name,
                    "slug": product.slug,
                    "description": product.description,
                    "price": float(product.price),
                    "stock": product.stock,
                    "image": product.image
                }
                for product in products
            ]
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": "Failed to fetch products",
            "error": str(e)
        }), 500


@app.route("/api/orders", methods=["POST"])
def create_database_order():

    try:
        data = request.get_json()

        customer_name = data.get("customer_name")
        customer_email = data.get("customer_email")
        customer_phone = data.get("customer_phone")
        shipping_address = data.get("shipping_address")
        items = data.get("items")

        # -------------------------
        # Basic validation
        # -------------------------

        if not customer_name:
            return jsonify({
                "success": False,
                "message": "Customer name is required"
            }), 400

        if not customer_email:
            return jsonify({
                "success": False,
                "message": "Customer email is required"
            }), 400

        if not customer_phone:
            return jsonify({
                "success": False,
                "message": "Customer phone is required"
            }), 400

        if not items or not isinstance(items, list):
            return jsonify({
                "success": False,
                "message": "Order items are required"
            }), 400

        # -------------------------
        # Create order number
        # -------------------------

        order_number = f"ORD-{uuid.uuid4().hex[:10].upper()}"

        total_amount = Decimal("0.00")

        order_items = []

        # -------------------------
        # Process products
        # -------------------------

        for item in items:

            product_id = item.get("product_id")
            quantity = item.get("quantity")

            if not product_id or not quantity:
                return jsonify({
                    "success": False,
                    "message": "Product ID and quantity are required"
                }), 400

            if quantity <= 0:
                return jsonify({
                    "success": False,
                    "message": "Quantity must be greater than zero"
                }), 400

            # Get product from database
            product = Product.query.get(product_id)

            if not product:
                return jsonify({
                    "success": False,
                    "message": f"Product {product_id} not found"
                }), 404

            # Check active
            if not product.is_active:
                return jsonify({
                    "success": False,
                    "message": f"{product.name} is not available"
                }), 400

            # Check stock
            if product.stock < quantity:
                return jsonify({
                    "success": False,
                    "message": f"Insufficient stock for {product.name}"
                }), 400

            # IMPORTANT:
            # Price comes from database.
            # Never trust frontend price.

            unit_price = Decimal(product.price)

            subtotal = unit_price * quantity

            total_amount += subtotal

            order_items.append({
                "product": product,
                "quantity": quantity,
                "unit_price": unit_price,
                "subtotal": subtotal
            })

        # -------------------------
        # Create Order
        # -------------------------

        order = Order(
            order_number=order_number,
            customer_name=customer_name,
            customer_email=customer_email,
            customer_phone=customer_phone,
            total_amount=total_amount,
            currency="INR",
            status="pending",
            shipping_address=shipping_address
        )

        db.session.add(order)

        # Flush so order.id becomes available
        db.session.flush()

        # -------------------------
        # Create OrderItems
        # -------------------------

        for item in order_items:

            order_item = OrderItem(
                order_id=order.id,
                product_id=item["product"].id,
                quantity=item["quantity"],
                unit_price=item["unit_price"],
                subtotal=item["subtotal"]
            )

            db.session.add(order_item)

        # -------------------------
        # Commit transaction
        # -------------------------

        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Order created successfully",
            "order": {
                "id": order.id,
                "order_number": order.order_number,
                "total_amount": str(order.total_amount),
                "currency": order.currency,
                "status": order.status
            }
        }), 201

    except Exception as e:

        db.session.rollback()

        print("CREATE ORDER ERROR:", e)

        return jsonify({
            "success": False,
            "message": "Unable to create order"
        }), 500

# --------------------------------
# 1. CREATE RAZORPAY ORDER
# --------------------------------

@app.route("/api/payments/create", methods=["POST"])
def create_payment_order():

    try:
        data = request.get_json()

        order_id = data.get("order_id")

        if not order_id:
            return jsonify({
                "success": False,
                "message": "Order ID is required"
            }), 400

        # --------------------------------
        # Find our database order
        # --------------------------------

        order = Order.query.get(order_id)

        if not order:
            return jsonify({
                "success": False,
                "message": "Order not found"
            }), 404

        # --------------------------------
        # Don't allow payment for
        # already completed orders
        # --------------------------------

        if order.status != "pending":
            return jsonify({
                "success": False,
                "message": "Order is not available for payment"
            }), 400

        # --------------------------------
        # Convert INR → paise
        # --------------------------------

        amount_in_paise = int(
            Decimal(str(order.total_amount)) * 100
        )

        # --------------------------------
        # Create Razorpay Order
        # --------------------------------

        razorpay_order = client.order.create({
            "amount": amount_in_paise,
            "currency": order.currency,
            "receipt": order.order_number
        })

        # --------------------------------
        # Create Transaction
        # --------------------------------

        transaction = Transaction(
            order_id=order.id,
            razorpay_order_id=razorpay_order["id"],
            amount=order.total_amount,
            currency=order.currency,
            status="created"
        )

        db.session.add(transaction)

        db.session.commit()

        # --------------------------------
        # Response
        # --------------------------------

        return jsonify({
            "success": True,
            "message": "Razorpay order created successfully",
            "payment": {
                "transaction_id": transaction.id,
                "razorpay_order_id": razorpay_order["id"],
                "amount": razorpay_order["amount"],
                "currency": razorpay_order["currency"]
            }
        }), 201

    except Exception as e:

        db.session.rollback()

        print("CREATE PAYMENT ERROR:", e)

        return jsonify({
            "success": False,
            "message": "Unable to create payment"
        }), 500


# @app.route("/api/create-order", methods=["POST"])
# def create_order():
#     try:
#         data = request.get_json()

#         amount = data.get("amount")

#         if amount is None:
#             return jsonify({
#                 "success": False,
#                 "message": "Amount is required"
#             }), 400

#         amount_in_paise = int(float(amount) * 100)

#         order_data = {
#             "amount": amount_in_paise,
#             "currency": "INR",
#             "receipt": "receipt_001"
#         }

#         order = client.order.create(data=order_data)

#         return jsonify({
#             "success": True,
#             "order_id": order["id"],
#             "amount": order["amount"],
#             "currency": order["currency"]
#         }), 200

#     except Exception as e:
#         print("CREATE ORDER ERROR:", e)

#         return jsonify({
#             "success": False,
#             "message": "Unable to create Razorpay order"
#         }), 500


# --------------------------------
# 2. VERIFY PAYMENT
# --------------------------------

@app.route("/api/payments/verify", methods=["POST"])
def verify_payment():
    try:
        data = request.get_json()

        razorpay_order_id = data.get("razorpay_order_id")
        razorpay_payment_id = data.get("razorpay_payment_id")
        razorpay_signature = data.get("razorpay_signature")

        if not razorpay_order_id or not razorpay_payment_id or not razorpay_signature:
            return jsonify({
                "success": False,
                "message": "Payment details are required"
            }), 400

        # Find our transaction using Razorpay Order ID
        transaction = Transaction.query.filter_by(
            razorpay_order_id=razorpay_order_id
        ).first()

        if not transaction:
            return jsonify({
                "success": False,
                "message": "Transaction not found"
            }), 404

        # Verify Razorpay signature
        client.utility.verify_payment_signature({
            "razorpay_order_id": razorpay_order_id,
            "razorpay_payment_id": razorpay_payment_id,
            "razorpay_signature": razorpay_signature
        })

        # Payment is genuine
        transaction.razorpay_payment_id = razorpay_payment_id
        transaction.razorpay_signature = razorpay_signature
        transaction.status = "paid"

        # Update our internal order
        order = transaction.order
        order.status = "confirmed"

        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Payment verified successfully",
            "order": {
                "id": order.id,
                "order_number": order.order_number,
                "status": order.status
            },
            "transaction": {
                "id": transaction.id,
                "status": transaction.status,
                "razorpay_payment_id": transaction.razorpay_payment_id
            }
        }), 200

    except razorpay.errors.SignatureVerificationError:
        db.session.rollback()

        return jsonify({
            "success": False,
            "message": "Invalid payment signature"
        }), 400

    except Exception as e:
        db.session.rollback()
        print("VERIFY PAYMENT ERROR:", e)

        return jsonify({
            "success": False,
            "message": "Unable to verify payment"
        }), 500
    
# @app.route("/api/verify-payment", methods=["POST"])
# def verify_payment():
#     try:
#         data = request.get_json()

#         razorpay_order_id = data.get("razorpay_order_id")
#         razorpay_payment_id = data.get("razorpay_payment_id")
#         razorpay_signature = data.get("razorpay_signature")

#         if not razorpay_order_id or not razorpay_payment_id or not razorpay_signature:
#             return jsonify({
#                 "success": False,
#                 "message": "Payment details are incomplete"
#             }), 400

#         client.utility.verify_payment_signature({
#             "razorpay_order_id": razorpay_order_id,
#             "razorpay_payment_id": razorpay_payment_id,
#             "razorpay_signature": razorpay_signature
#         })

#         return jsonify({
#             "success": True,
#             "message": "Payment verified successfully",
#             "payment_id": razorpay_payment_id,
#             "order_id": razorpay_order_id
#         }), 200

#     except razorpay.errors.SignatureVerificationError:
#         return jsonify({
#             "success": False,
#             "message": "Invalid payment signature"
#         }), 400

#     except Exception as e:
#         print("VERIFY PAYMENT ERROR:", e)

#         return jsonify({
#             "success": False,
#             "message": "Payment verification failed"
#         }), 500


if __name__ == "__main__":
    app.run(debug=True)