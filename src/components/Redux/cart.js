import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts:[],
    cartToggle: false
}

const cartSlice = createSlice ({
    name: "carts",
    initialState: initialState,
    reducers: {
        carts(state,action) {
            state.carts = action.payload;
        },
        add(state, action) {
            const already = state.carts.find((item) => item.id === action.payload.id);
            if (already) {
                already.quantity += 1;
                already.total = already.quantity * action.payload.price;
            }else {
                action.payload.quantity = 1;
                state.carts.push(action.payload);
            }

        },
        cartToggle(state) {
            state.cartToggle = !state.cartToggle;
        },
        increse(state, action) {
            const already = state.carts.find((item) => item.id === action.payload.id);
            if (already) {
                already.quantity += 1;
                already.total = already.quantity *  already.price;
            }
        },
        decrese(state, action) {
            const already = state.carts.find((item) => item.id === action.payload.id);
            if (already.quantity <= 1) {
                state.carts = state.carts.filter((item) => item.id !== action.payload.id);
            }else {
                if (already) {
                    already.quantity -= 1;
                    already.total = already.quantity *  already.price;
                }
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;