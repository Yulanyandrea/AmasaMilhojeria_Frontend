import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberProducts:0,
  products: [],
  status: 'idle',
};

const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers:{
    increment:(state,action)=>{
      state.numberProducts +=1;
    },
    decrement:(state,action)=>{
      state.value-=1;
    },
  }
});

export const { increment, decrement } = productReducer.actions;

export default productReducer.reducer;
