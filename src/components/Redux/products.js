import { createSlice } from "@reduxjs/toolkit";
const products = [
  { id: 1, title: "Brush", price: 1, description: "House hold" },
  { id: 2, title: "Notebook", price: 3, description: "Stationery item for writing" },
  { id: 3, title: "Pen", price: 2, description: "Blue ink ballpoint pen" },
  { id: 4, title: "Water Bottle", price: 5, description: "Reusable plastic bottle" },
  { id: 5, title: "Backpack", price: 25, description: "Durable school/office bag" },
  { id: 6, title: "Shoes", price: 40, description: "Running shoes for daily use" },
  { id: 7, title: "Headphones", price: 60, description: "Wireless over-ear headphones" },
  { id: 8, title: "Coffee Mug", price: 8, description: "Ceramic mug for hot drinks" }
];  
const initialState = {
    products: products
};


const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        listing(state, action) {
            state.products = action.payload || [];
        },

    }
});

export const { listing } = productsSlice.actions;
export default productsSlice.reducer;
