import { useEffect, useState } from "react";
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const CheckoutPage = ({ onNavigate }) => {
    const [loading, setLoading] = useState(false);
    const RAZORPAY_KEY_ID = "rzp_test_TbOpd9HOo1qQaX";

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }

            const script = document.createElement("script");

            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);

            document.body.appendChild(script);
        });
    };

    const handleProceedToPayment = async () => {
        if (!cartItem) {
            alert("No product in cart");
            return;
        }

        setLoading(true);

        try {
            // --------------------------------
            // 1. Load Razorpay Checkout
            // --------------------------------

            const razorpayLoaded = await loadRazorpay();

            if (!razorpayLoaded) {
                throw new Error("Razorpay Checkout failed to load");
            }

            // --------------------------------
            // 2. Create internal order
            // --------------------------------

            const orderResponse = await fetch(
                "http://127.0.0.1:5000/api/orders",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        customer_name: form.customer_name,
                        customer_email: form.customer_email,
                        customer_phone: form.customer_phone,
                        shipping_address: form.shipping_address,

                        items: [
                            {
                                product_id: cartItem.product_id,
                                quantity: cartItem.quantity,
                            },
                        ],
                    }),
                }
            );

            const orderData = await orderResponse.json();

            if (!orderResponse.ok || !orderData.success) {
                throw new Error(
                    orderData.message || "Failed to create order"
                );
            }

            console.log("Internal order created:", orderData);

            // --------------------------------
            // 3. Create Razorpay order
            // --------------------------------

            const paymentResponse = await fetch(
                "http://127.0.0.1:5000/api/payments/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        order_id: orderData.order.id,
                    }),
                }
            );

            const paymentData = await paymentResponse.json();

            if (!paymentResponse.ok || !paymentData.success) {
                throw new Error(
                    paymentData.message || "Failed to create payment"
                );
            }

            console.log("Razorpay order created:", paymentData);

            // --------------------------------
            // 4. Open Razorpay Checkout
            // --------------------------------

            const options = {
                key: RAZORPAY_KEY_ID,

                amount: paymentData.payment.amount,

                currency: paymentData.payment.currency,

                name: "Andrinova",

                description: "Electronics Order",

                order_id: paymentData.payment.razorpay_order_id,

                prefill: {
                    name: form.customer_name,
                    email: form.customer_email,
                    contact: form.customer_phone,
                },

                notes: {
                    internal_order_id: String(orderData.order.id),
                },

                theme: {
                    color: "#2D0B6B",
                },

                handler: async function (response) {
                    console.log("Razorpay payment response:", response);

                    await verifyPayment(
                        response,
                        orderData.order.id
                    );
                },

                modal: {
                    ondismiss: function () {
                        console.log("Razorpay checkout closed");

                        setLoading(false);
                    },
                },
            };

            const razorpay = new window.Razorpay(options);

            razorpay.on("payment.failed", function (response) {
                console.error(
                    "Payment failed:",
                    response.error
                );

                alert(
                    response.error.description ||
                    "Payment failed"
                );

                setLoading(false);
            });

            razorpay.open();

        } catch (error) {
            console.error(
                "Payment process failed:",
                error
            );

            alert(error.message);

            setLoading(false);
        }
    };

    const verifyPayment = async (
        razorpayResponse,
        internalOrderId
    ) => {
        try {
            const response = await fetch(
                "http://127.0.0.1:5000/api/payments/verify",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        razorpay_order_id:
                            razorpayResponse.razorpay_order_id,

                        razorpay_payment_id:
                            razorpayResponse.razorpay_payment_id,

                        razorpay_signature:
                            razorpayResponse.razorpay_signature,
                    }),
                }
            );

            const data = await response.json();

            console.log("Payment verification:", data);

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "Payment verification failed"
                );
            }

            // Payment successfully verified
            alert("Payment successful!");

            // Remove purchased product from temporary cart
            localStorage.removeItem("andrinova_cart");

            setLoading(false);

            // Later we'll navigate to success page
            // onNavigate && onNavigate("order-success");

        } catch (error) {
            console.error(
                "Payment verification failed:",
                error
            );

            alert(
                "Payment verification failed. Please contact support."
            );

            setLoading(false);
        }
    };
    const [cartItem, setCartItem] = useState(null);

    const [form, setForm] = useState({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        shipping_address: ""
    });

    useEffect(() => {
        const savedCart = localStorage.getItem("andrinova_cart");

        if (savedCart) {
            setCartItem(JSON.parse(savedCart));
        }
    }, []);

    if (!cartItem) {
        return (
            <div className="p-10">
                <h1 className="text-2xl font-bold">
                    Your cart is empty
                </h1>
            </div>
        );
    }

    const product = cartItem.product;

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
            {/* CSS Animation Keyframes */}
            <style>{`
            @keyframes scrollRightToLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-brands-rtl {
              display: flex;
              width: max-content;
              animation: scrollRightToLeft 25s linear infinite;
            }
            .brands-marquee-container:hover .animate-brands-rtl {
              animation-play-state: paused;
            }
          `}</style>

            <div>
                <TopBar />
                <Header onNavigate={onNavigate} />
                <Navbar activePage="new-arrivals" onNavigate={onNavigate} />

                <main className="max-w-350 mx-auto px-4 md:px-12 py-6">
                    <div className="max-w-6xl mx-auto p-6">

                        <h1 className="text-3xl font-black mb-8">
                            Checkout
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Customer Details */}
                            <div className="border rounded-2xl p-6">

                                <h2 className="text-xl font-bold mb-6">
                                    Customer Details
                                </h2>

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={form.customer_name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            customer_name: e.target.value
                                        })
                                    }
                                    className="w-full border rounded-lg p-3 mb-4"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={form.customer_email}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            customer_email: e.target.value
                                        })
                                    }
                                    className="w-full border rounded-lg p-3 mb-4"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    value={form.customer_phone}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            customer_phone: e.target.value
                                        })
                                    }
                                    className="w-full border rounded-lg p-3 mb-4"
                                />

                                <textarea
                                    placeholder="Shipping Address"
                                    value={form.shipping_address}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            shipping_address: e.target.value
                                        })
                                    }
                                    className="w-full border rounded-lg p-3"
                                    rows="4"
                                />

                            </div>

                            {/* Order Summary */}
                            <div className="border rounded-2xl p-6">

                                <h2 className="text-xl font-bold mb-6">
                                    Your Order
                                </h2>

                                <div className="flex justify-between mb-4">

                                    <div>
                                        <h3 className="font-bold">
                                            {product.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Quantity: {cartItem.quantity}
                                        </p>
                                    </div>

                                    <span className="font-bold">
                                        ₹{product.price}
                                    </span>

                                </div>

                                <div className="border-t pt-4 flex justify-between">

                                    <span className="font-bold">
                                        Total
                                    </span>

                                    <span className="text-xl font-black text-[#2D0B6B]">
                                        ₹{product.price * cartItem.quantity}
                                    </span>

                                </div>

                                <button
                                    type="button"
                                    onClick={handleProceedToPayment}
                                    disabled={loading}
                                    className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${loading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-[#2D0B6B] hover:bg-[#1f074a] cursor-pointer"
                                        }`}
                                >
                                    {loading ? "Processing Payment..." : "Proceed to Payment"}
                                </button>

                            </div>

                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default CheckoutPage;