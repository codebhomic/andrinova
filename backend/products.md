POST   /api/categories
GET    /api/categories

POST   /api/products
GET    /api/products
GET    /api/products/<id>
PUT    /api/products/<id>
DELETE /api/products/<id>

POST /api/orders

{
    "customer_name": "Bhoumic",
    "customer_email": "user@example.com",
    "customer_phone": "9876543210",
    "items": [
        {
            "product_id": 1,
            "quantity": 2
        },
        {
            "product_id": 3,
            "quantity": 1
        }
    ]
}

Your Order
     ↓
Calculate amount
     ↓
Razorpay API
     ↓
Razorpay Order
     ↓
Save razorpay_order_id
     ↓
Frontend opens Razorpay Checkout

Frontend
   ↓
razorpay_payment_id
razorpay_order_id
razorpay_signature
   ↓
Flask backend
   ↓
Verify signature
   ↓
Transaction = paid
   ↓
Order = confirmed


Razorpay
   ↓
POST /api/payments/webhook
   ↓
Verify webhook
   ↓
Update Transaction
   ↓
Update Order