import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useSelector, useDispatch } from 'react-redux';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import { clearShipping } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const OrderComplete = () => {
    const shipping = useSelector((state) => state.shipping); // ✅ contains shipping info + items
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fallback if no order found
    if (!shipping || !shipping.items) {
        return (
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-3xl font-bold text-white">No order found</h2>
                    <button
                        onClick={() => navigate("/")}
                        className="mt-6 px-6 py-3 rounded-md bg-white text-black font-bold hover:bg-white/90"
                    >
                        Continue Shopping
                    </button>
                </div>
            </main>
        );
    }

    // Get from saved shipping info
    const { items, orderId, name, address, city, state, zip } = shipping;

    // Current date
    const orderDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    // Estimate delivery (5–7 days from now)
    const deliveryStart = new Date();
    deliveryStart.setDate(deliveryStart.getDate() + 5);
    const deliveryEnd = new Date();
    deliveryEnd.setDate(deliveryEnd.getDate() + 7);
    const estimatedDelivery = `${deliveryStart.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${deliveryEnd.toLocaleDateString("en-US", { month: "long", day: "numeric" })}`;

    // Cart totals
    const subtotal = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    const shippingCost = 10; // Example shipping cost
    const total = subtotal + shippingCost;

    const handleContinueShopping = () => {
        dispatch(clearShipping()); // clear shipping after order confirmed
        navigate("/"); // redirect to home
    };

    return (
        <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    {/* Confirmation */}
                    <div className="text-center mb-12">
                        <span className="order-confirm text-6xl text-green-400 mb-4 inline-block">
                            <TaskAltIcon fontSize="large" />
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Order Confirmed!</h2>
                        <p className="mt-4 text-lg text-[var(--secondary-text-color)]">
                            Thank you, {name || "Customer"}. Your order #
                            <span className="font-medium text-white"> {orderId}</span> has been placed.
                        </p>
                        <p className="mt-2 text-sm text-[var(--secondary-text-color)]">
                            You'll receive an email with tracking information once it ships.
                        </p>
                    </div>

                    {/* Order Details */}
                    <div className="bg-[var(--surface-color)] rounded-lg p-6 md:p-8">
                        <div className="space-y-6">
                            {/* Order Summary */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-[var(--secondary-text-color)]">Order Date</span>
                                        <span className="font-medium">{orderDate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[var(--secondary-text-color)]">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[var(--secondary-text-color)]">Shipping</span>
                                        <span className="font-medium">
                                            {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-base font-bold border-t border-[var(--border-color)] pt-3 mt-3">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Items Purchased */}
                            <div className="border-t border-[var(--border-color)] pt-6">
                                <h3 className="text-xl font-bold mb-4">Items Purchased</h3>
                                <ul className="space-y-4">
                                    {items.map((item) => (
                                        <li key={item.id} className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 size-16 rounded-md bg-cover bg-center"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            ></div>
                                            <div className="flex-grow">
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-[var(--secondary-text-color)]">
                                                    Qty: {item.quantity || 1}
                                                </p>
                                            </div>
                                            <div className="font-medium">
                                                ${(item.price * (item.quantity || 1)).toFixed(2)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Shipping & Delivery */}
                            <div className="grid md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Shipping Address</h3>
                                    <address className="not-italic text-sm text-[var(--secondary-text-color)] leading-relaxed">
                                        {name}<br />
                                        {address}<br />
                                        {city}, {state} {zip}
                                    </address>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Estimated Delivery</h3>
                                    <p className="font-medium text-white">{estimatedDelivery}</p>
                                    <p className="text-sm text-[var(--secondary-text-color)]">Standard Shipping</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleContinueShopping}
                                className="cursor-pointer w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-black font-bold hover:bg-white/90 transition-colors"
                            >
                                <span>Continue Shopping</span>
                                <span className="material-symbols-outlined">
                                    <ArrowForwardSharpIcon fontSize="large" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OrderComplete;
