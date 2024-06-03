import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adultsQuantity: 1,
    childrenQuantity: 0,
    roomQuantityNoOf: 1
}

const GuestsSlice = createSlice({
    name: "Guests",
    initialState,
    reducers: {
        incrementCh: (state, actions) => {
            switch (actions.payload.type) {
                case "adultsQuantity":
                    state.adultsQuantity += actions.payload?.count
                    break;
                case "childrenQuantity":
                    state.childrenQuantity += actions.payload?.count
                    break;
                case "roomQuantityNoOf":
                    state.roomQuantityNoOf += actions.payload?.count
                    break;
                default:
                    console.log('Type is not Match')
                    break;
            }
        },
        decrementCh: (state, actions) => {
            switch (actions.payload.type) {
                case "adultsQuantity":
                    state.adultsQuantity -= actions.payload?.count
                    break;
                case "childrenQuantity":
                    state.childrenQuantity -= actions.payload?.count
                    break;
                case "roomQuantityNoOf":
                    state.roomQuantityNoOf -= actions.payload?.count
                    break;
                default:
                    console.log('Type is not Match')
                    break;
            }
        },
    }
})

export const { incrementCh, decrementCh } = GuestsSlice.actions;
export default GuestsSlice.reducer;