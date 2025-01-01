import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/productSlice'
import userSlice from './features/userSlice'
import cartSlice from './features/cartSlice'
 
const store = configureStore({
    reducer: {
        // Add reducers here
        products: productSlice,
        cart: cartSlice,
        user: userSlice,

    }
})

export default store