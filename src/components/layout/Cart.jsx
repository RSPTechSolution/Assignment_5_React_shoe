import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, decreaseQuantity } from "../../redux/actions"
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getTotal = (cart) => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const CartPrice = getTotal(cartItems);
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <div className="space-y-6 overflow-y-auto">
                {
                    cartItems.length === 0 ? <p className="text-gray-400">Your cart is empty</p>

                    : cartItems.map((item) => 
                        <div className="flex items-center gap-4" key={item.id}>
                            <div className="w-20 h-20 bg-cover bg-center rounded-md" style={{ backgroundImage: `url("${item.image}")`}}></div>
                            <div className="flex-1">
                                <p className="font-semibold text-white">{item.name}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="cursor-pointer text-gray-400 hover:text-white rounded-full p-1 transition-colors duration-200"><svg className="bi bi-dash-circle" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                    </svg></button>
                                    <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                                    <button onClick={() => dispatch(addToCart(item))} className="cursor-pointer text-gray-400 hover:text-white rounded-full p-1 transition-colors duration-200"><svg className="bi bi-plus-circle" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                    </svg></button>
                                </div>
                                <p className="text-base font-bold text-[var(--primary-color)] mt-1">${item.price}</p>
                            </div>
                            <button onClick={() => dispatch(removeFromCart(item.id))} className="cursor-pointer text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    )
                }

            </div>
            <div className="border-t border-gray-700 mt-6 pt-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg text-gray-300">Subtotal</p>
                    <p className="text-xl font-bold text-white">${CartPrice.toFixed(2)}</p>
                </div>
                <button onClick={() => navigate('/payment')}
                    disabled={cartItems.length === 0}
                    className=" cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full flex items-center justify-center h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold rounded-md hover:bg-red-700 transition-colors">
                    Checkout
                </button>
            </div>
        </>
    )
}

export default Cart