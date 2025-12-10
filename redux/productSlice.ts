import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const productFetch = createAsyncThunk(
    "products/productFetch" ,
    
    async ()=>{
        return fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .catch((error)=>{throw error})
    }
)


const productSlice = createSlice({

    name:"products" ,

    initialState:{
        data:[] , 
        status:""
    },

    reducers:{},
    
    extraReducers:(builder)=>{
        builder
        .addCase(productFetch.pending , (state)=>{
            state.status="loading ..."
        })

        .addCase(productFetch.fulfilled , (state,action)=>{
            state.status="success"
            state.data=action.payload
        })

        .addCase(productFetch.rejected , (state,)=>{
            state.status="failed ..."
        })
    }
})

export default productSlice