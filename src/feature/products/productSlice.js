import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from './productsApi';

const initialState = {
  cake:0,
  halfCakeAmount:0,
  personalCake:0,
  products: [],
  status: 'idle',
};

// get data products
export const productsData = createAsyncThunk('products/data', async () => {
  const productNames = getAllProducts();
  return productNames
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
