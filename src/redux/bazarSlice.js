import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
};

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("Current state:", state);
            console.log("Action payload:", action.payload);

            const item = state.productData.find((item) => item._id === action.payload._id);

            if (item) {
                // If the item is already in the cart, update its quantity
                console.log("Item found. Updating quantity.");
                item.quantity += action.payload.quantity;
            } else {
                // If the item is not in the cart, add it to the cart
                console.log("Item not found. Adding to cart.");
                state.productData.push(action.payload);
            }

            console.log("Updated state:", state);
        },

        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        }
    },
    
});

export const { addToCart, deleteItem, resetCart, increamentQuantity, decrementQuantity } = bazarSlice.actions;
export default bazarSlice.reducer;
