from datetime import datetime
from decimal import Decimal

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Numeric, CheckConstraint

db = SQLAlchemy()


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False, unique=True)
    slug = db.Column(db.String(120), nullable=False, unique=True)

    description = db.Column(db.Text, nullable=True)

    is_active = db.Column(db.Boolean, default=True, nullable=False)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )
    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    # Relationship
    products = db.relationship(
        "Product",
        back_populates="category",
        lazy=True
    )

    def __repr__(self):
        return f"<Category {self.name}>"


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)

    category_id = db.Column(
        db.Integer,
        db.ForeignKey("categories.id"),
        nullable=False
    )

    name = db.Column(db.String(150), nullable=False)
    slug = db.Column(db.String(180), nullable=False, unique=True)

    description = db.Column(db.Text, nullable=True)

    # Store money as Decimal/Numeric rather than Float
    price = db.Column(
        Numeric(10, 2),
        nullable=False
    )

    stock = db.Column(
        db.Integer,
        nullable=False,
        default=0
    )

    image = db.Column(db.String(255), nullable=True)

    is_active = db.Column(
        db.Boolean,
        default=True,
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    # Relationship
    category = db.relationship(
        "Category",
        back_populates="products"
    )

    order_items = db.relationship(
        "OrderItem",
        back_populates="product"
    )

    def __repr__(self):
        return f"<Product {self.name}>"


class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)

    # Your internal order number
    order_number = db.Column(
        db.String(50),
        unique=True,
        nullable=False
    )

    # Customer information
    customer_name = db.Column(
        db.String(150),
        nullable=False
    )

    customer_email = db.Column(
        db.String(150),
        nullable=False
    )

    customer_phone = db.Column(
        db.String(20),
        nullable=False
    )

    # Order amount
    total_amount = db.Column(
        Numeric(10, 2),
        nullable=False
    )

    currency = db.Column(
        db.String(3),
        default="INR",
        nullable=False
    )

    # Order status
    status = db.Column(
        db.String(30),
        default="pending",
        nullable=False
    )

    # Example:
    # pending
    # confirmed
    # processing
    # shipped
    # delivered
    # cancelled

    shipping_address = db.Column(
        db.Text,
        nullable=True
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    # Relationships
    items = db.relationship(
        "OrderItem",
        back_populates="order",
        cascade="all, delete-orphan"
    )

    transactions = db.relationship(
        "Transaction",
        back_populates="order",
        cascade="all, delete-orphan"
    )

    def __repr__(self):
        return f"<Order {self.order_number}>"


class OrderItem(db.Model):
    """
    Stores the products belonging to an order.

    This table is important.

    Do NOT simply store product IDs inside orders.
    An order can contain multiple products.
    """

    __tablename__ = "order_items"

    id = db.Column(db.Integer, primary_key=True)

    order_id = db.Column(
        db.Integer,
        db.ForeignKey("orders.id"),
        nullable=False
    )

    product_id = db.Column(
        db.Integer,
        db.ForeignKey("products.id"),
        nullable=False
    )

    quantity = db.Column(
        db.Integer,
        nullable=False
    )

    # Price at the time of purchase
    unit_price = db.Column(
        Numeric(10, 2),
        nullable=False
    )

    # quantity * unit_price
    subtotal = db.Column(
        Numeric(10, 2),
        nullable=False
    )

    # Relationships
    order = db.relationship(
        "Order",
        back_populates="items"
    )

    product = db.relationship(
        "Product",
        back_populates="order_items"
    )

    __table_args__ = (
        CheckConstraint(
            "quantity > 0",
            name="check_quantity_positive"
        ),
    )

    def __repr__(self):
        return f"<OrderItem Order={self.order_id} Product={self.product_id}>"


class Transaction(db.Model):
    """
    Stores payment gateway transactions.

    Razorpay-related IDs are stored here.
    """

    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)

    order_id = db.Column(
        db.Integer,
        db.ForeignKey("orders.id"),
        nullable=False
    )

    # Razorpay Order ID
    razorpay_order_id = db.Column(
        db.String(100),
        unique=True,
        nullable=True
    )

    # Razorpay Payment ID
    razorpay_payment_id = db.Column(
        db.String(100),
        unique=True,
        nullable=True
    )

    # Razorpay Signature
    razorpay_signature = db.Column(
        db.String(255),
        nullable=True
    )

    amount = db.Column(
        Numeric(10, 2),
        nullable=False
    )

    currency = db.Column(
        db.String(3),
        default="INR",
        nullable=False
    )

    # Payment status
    status = db.Column(
        db.String(30),
        default="created",
        nullable=False
    )

    # created
    # attempted
    # paid
    # failed
    # refunded

    payment_method = db.Column(
        db.String(50),
        nullable=True
    )

    failure_reason = db.Column(
        db.Text,
        nullable=True
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    # Relationship
    order = db.relationship(
        "Order",
        back_populates="transactions"
    )

    def __repr__(self):
        return f"<Transaction {self.razorpay_order_id}>"