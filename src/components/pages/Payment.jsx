import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, saveShippingInfo, clearCart } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
    const cartItem = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        zip: "",
        country: "",
        method: "credit-card",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Validation
    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.zip) newErrors.zip = "Zip code is required";
        if (!formData.country) newErrors.country = "Country is required";

        if (formData.method === "credit-card") {
            if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s+/g, "")))
                newErrors.cardNumber = "Invalid card number";
            if (!/^\d{2}\/\d{2}$/.test(formData.expiry))
                newErrors.expiry = "Expiry must be MM/YY";
            if (!/^\d{3,4}$/.test(formData.cvv))
                newErrors.cvv = "Invalid CVV";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const generateOrderId = () => {
        return "ORD-" + Math.floor(1000000000 + Math.random() * 9000000000);
    };

    const handlePlaceOrder = () => {
        if (!validate()) return;

        const orderId = generateOrderId();

        dispatch(saveShippingInfo({ 
            ...formData, 
            orderId, 
            items: cartItem 
        }));
        dispatch(clearCart());
        navigate("/order-completed");
    };

    const getTotal = (cart) =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const subTotal = getTotal(cartItem);
    const shipping = cartItem.length > 0 ? 10 : 0;
    const totalAmount = subTotal + shipping;

    return (
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-12">
                {/* LEFT SIDE FORM */}
                <div className="flex-1">
                    <h2 className="text-white tracking-tight text-3xl font-bold mb-6">
                        Checkout
                    </h2>
                    <div className="space-y-6">
                        {/* Shipping */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">
                                Shipping Information
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {["name", "address", "city", "zip", "country"].map((field) => (
                                    <label key={field} className="flex flex-col">
                                        <p className="text-gray-300 text-sm font-medium mb-2 capitalize">
                                            {field}
                                        </p>
                                        <input
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="form-input w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 border-none h-12 px-4"
                                        />
                                        {errors[field] && (
                                            <span className="text-red-500 text-sm">
                                                {errors[field]}
                                            </span>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Payment */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">
                                Payment Details
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                <label className="flex flex-col">
                                    <p className="text-gray-300 text-sm font-medium mb-2">
                                        Payment Method
                                    </p>
                                    <select
                                        name="method"
                                        value={formData.method}
                                        onChange={handleChange}
                                        className="form-select w-full rounded-md bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-red-500 border-none h-12 px-4"
                                    >
                                        <option value="credit-card">Credit Card</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="cod">Cash on Delivery</option>
                                    </select>
                                </label>

                                {formData.method === "credit-card" && (
                                    <>
                                        <label className="flex flex-col">
                                            <p className="text-gray-300 text-sm font-medium mb-2">
                                                Card Number
                                            </p>
                                            <input
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                placeholder="1234 5678 9012 3456"
                                                className="form-input w-full rounded-md bg-gray-800 text-white h-12 px-4"
                                            />
                                            {errors.cardNumber && (
                                                <span className="text-red-500 text-sm">
                                                    {errors.cardNumber}
                                                </span>
                                            )}
                                        </label>

                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="flex flex-col">
                                                <p className="text-gray-300 text-sm font-medium mb-2">
                                                    Expiry
                                                </p>
                                                <input
                                                    name="expiry"
                                                    value={formData.expiry}
                                                    onChange={handleChange}
                                                    placeholder="MM/YY"
                                                    className="form-input w-full rounded-md bg-gray-800 text-white h-12 px-4"
                                                />
                                                {errors.expiry && (
                                                    <span className="text-red-500 text-sm">
                                                        {errors.expiry}
                                                    </span>
                                                )}
                                            </label>
                                            <label className="flex flex-col">
                                                <p className="text-gray-300 text-sm font-medium mb-2">
                                                    CVV
                                                </p>
                                                <input
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleChange}
                                                    placeholder="123"
                                                    className="form-input w-full rounded-md bg-gray-800 text-white h-12 px-4"
                                                />
                                                {errors.cvv && (
                                                    <span className="text-red-500 text-sm">
                                                        {errors.cvv}
                                                    </span>
                                                )}
                                            </label>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE ORDER SUMMARY */}
                <div className="w-full lg:w-96 bg-gray-800 rounded-lg p-6 h-fit">
                    <h3 className="text-white text-lg font-bold mb-4">Order Summary</h3>
                    {cartItem.length === 0 ? (
                        <p className="text-gray-400">Your cart is empty</p>
                    ) : (
                        cartItem.map((item) => (
                            <div className="flex items-center gap-4 py-4" key={item.id}>
                                <div
                                    className="w-20 h-20 bg-cover bg-center rounded-md"
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                ></div>
                                <div className="flex-1">
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                                    <p className="text-base font-bold text-[var(--primary-color)]">
                                        ${item.price}
                                    </p>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="text-gray-400 hover:text-white"
                                >
                                    ❌
                                </button>
                            </div>
                        ))
                    )}

                    <div className="border-t border-gray-700 my-6"></div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-400 text-sm">
                            <p>Subtotal</p>
                            <p>${subTotal}</p>
                        </div>
                        <div className="flex justify-between text-gray-400 text-sm">
                            <p>Shipping</p>
                            <p>${shipping}</p>
                        </div>
                        <div className="flex justify-between text-white font-bold text-lg">
                            <p>Total</p>
                            <p>${totalAmount}</p>
                        </div>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        disabled={cartItem.length === 0}
                        className="w-full mt-6 rounded-md h-12 px-5 bg-red-600 text-white text-base font-bold hover:bg-red-700 disabled:opacity-50"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
