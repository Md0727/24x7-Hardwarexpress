import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   searchId: null
}

const SearchSlice = createSlice({
   name: 'searchId',
   initialState,
   reducers: {
      setSearch_Id: (state, action) => {
        state.searchId = action.payload;
        console.log('action', action.payload)
      },
   }
})

export const {
    setSearch_Id,
} = SearchSlice.actions;
export default SearchSlice.reducer;