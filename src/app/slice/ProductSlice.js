import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   filter: {
      category: 'Furniture',
      limit: 10,
      page: 1,
      brand: "",
      color: "",
      ratingRange: 0,
      furnitureType: "",
      careInstruction: "",
      highToLow: false,
      lowToHigh: false,
      mostPopular: false,
      priceRange: {
         minPrice: 0,
         maxPrice: 100000
      }
   },
   cart: []
}

const ProductSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      setFilter(state, action) {
         state.filter = { ...state.filter, ...action.payload };
      },
      addToCart: (state, action) => {
         state.cart = action.payload;
      },
   }
})

export const {
   setFilter,
   addToCart,
} = ProductSlice.actions;
export default ProductSlice.reducer;