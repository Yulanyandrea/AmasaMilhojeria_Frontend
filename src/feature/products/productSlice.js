import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'idle',
};

const productReducer = createSlice({
  name: 'products',
  initialState,
});

export default productReducer;
