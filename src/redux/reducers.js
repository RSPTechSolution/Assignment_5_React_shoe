import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY, SAVE_SHIPPING_INFO, CLEAR_CART, CLEAR_SHIPPING  } from "./actions";
import productsData from '../Api/product.json';
import category from '../Api/category.json';
import banners from '../Api/hero-banner.json';

const initialState = {
    products: productsData,
    category: category,
    banner: banners,
    shipping: {},
    cart: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const item = action.payload;
            const existItem = state.cart.find((product) => product.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cart: state.cart.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...item, quantity: 1 }],
                };
            }
        }

        case DECREASE_QUANTITY: {
            return {
                ...state,
                cart: state.cart
                    .map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0), // remove if 0
            };
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };

        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shipping: action.payload,
            };
        
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
        
        case CLEAR_SHIPPING:
            return {
                ...state,
                shipping: {},
            };
        default:
            return state;
    }
};
