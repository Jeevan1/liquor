import { createSlice } from "@reduxjs/toolkit";
import { alcoholProducts } from "../../assets/data/Products";

//define the initial state
const initialState = {
    alcoholProducts : alcoholProducts,
    loading: false,
    error: '',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        getProductsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default  productSlice.reducer;

export const { getProducts, getProductsSuccess, getProductsError } = productSlice.actions;