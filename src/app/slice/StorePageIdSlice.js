import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pageId: null,
    productPageId: null
}

const StorePageIdSlice = createSlice({
   name: 'savePageId',
   initialState,
   reducers: {
      savePageId: (state, action) => {
        state.pageId = action.payload;
        console.log('action', action.payload)
      },
      saveProductPageId: (state, action) => {
        state.productPageId = action.payload;
        console.log('action saveProductPageId', action.payload)
      },
   }
})

export const {
    savePageId,
    saveProductPageId
} = StorePageIdSlice.actions;
export default StorePageIdSlice.reducer;