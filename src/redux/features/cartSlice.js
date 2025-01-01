import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const { product, qty } = action.payload;
            const existingProduct = state.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.qty++; 
              } else {
                state.push({ ...product, qty });
              }
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;