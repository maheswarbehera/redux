import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { getAll, getById } from '../../service/productService';
 
const initialState = {
    data: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {
        // using core redux
        // fetchProducts: (state, action) => {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        // Add extra reducers here
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.data = action.payload
        })        
    }
});


// export const getProducts = createAsyncThunk('products/get', async () => {
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     return data
// })
export const getProducts = createAsyncThunk('products/get', getAll)
export const getProductById = createAsyncThunk('products/get/id', async (id) => {
    try {
        const data = await getById(id)
        return data
    } catch (error) {
        return error.message
    }
});

// using core redux
// export function getProducts(){
//     return async function getProductsThunk(dispatch) {
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data = await response.json()
//         dispatch(fetchProducts(data))
//     }
// }

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;


