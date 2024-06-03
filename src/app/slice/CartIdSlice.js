import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   cartId: null
}

const CartIdSlice = createSlice({
   name: 'cartId',
   initialState,
   reducers: {
      setCart_Id: (state, action) => {
        state.cartId = action.payload;
      },
   }
})

export const {
    setCart_Id,
} = CartIdSlice.actions;
export default CartIdSlice.reducer;