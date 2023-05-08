import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from './apollo-client'; './apollo-client';
import GET_PRODUCTS from './productApi';

const initialState = {
  cake:0,
  halfCakeAmount:0,
  personalCake:0,
  products: [],
  status: 'idle',
};

// get data products
export const productsData = createAsyncThunk('products/data', async () => {
  try {
    const { data } = await client.query({
      query:GET_PRODUCTS
    });
    return data
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;

  }
})

const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers:{
    //cake
    increment:(state,action)=>{
      state.cake +=1;
    },
    decrement:(state,action)=>{
      state.cake-=1;
    },
    // half cake
    incrementHalfCake:(state,action)=>{
      state.halfCakeAmount +=1;
    },
    decrementHalfCake:(state,action)=>{
      state.halfCakeAmount-=1;
    },
    //personal
    incrementPersonalCake:(state,action)=>{
      state.personalCake +=1;
    },
    decrementPersonalCake:(state,action)=>{
      state.personalCake-=1;
    },
  },extraReducers:(builder) => {
    builder
    .addCase(productsData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(productsData.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(productsData.rejected, (state) => {
      state.status = 'reject';
    })

  }
});

export const { increment,
  decrement,
  incrementHalfCake,
  decrementHalfCake,
  incrementPersonalCake,
  decrementPersonalCake
} = productReducer.actions;

export default productReducer.reducer;
