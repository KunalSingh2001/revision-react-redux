import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[]
}

const cartSlice = createSlice ({
    name: "carts",
    initialState: initialState,
    reducers: {
        carts(state,action) {
            state.carts = action.payload;
        },
        add(state, action) {
            state.carts.push(action.payload);
        }
    }
})

export const {carts} = cartSlice.actions;
export default cartSlice.reducer;