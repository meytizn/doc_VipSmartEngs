import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the product in the cart
export interface CartProductInterfaceSlice {
    id: number;
    title: string; 
    price: number;
    image: string;
    quantity: number;
}

// Define the initial state as an array of CartProduct
const initialState: CartProductInterfaceSlice[] = [];

// Create the cart slice
const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProductInterfaceSlice>) => {
            const oldProduct = state.find(product => product.id === action.payload.id);

            if (oldProduct) {
                oldProduct.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            return state.filter(product => product.id !== action.payload);
        },

        changeQuantityProduct: (state, action: PayloadAction<{ id: number; change: number }>) => {
            const { id, change } = action.payload;
            const existingProduct = state.find(product => product.id === id);

            if (existingProduct) {
                existingProduct.quantity += change;
            }
        },

        clearCart: () => initialState,
    },
});


export default cartSlice;
