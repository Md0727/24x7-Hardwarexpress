import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    register: []
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        addValue: (state, action) => {
            state.register.push({
                id: nanoid(),
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            })
        },
        forgotePassword: (state, action) => {
            state.register.map((record) => {
                if (record.email === action.payload.email) {
                    return record.password = action.payload.passwordNew
                }
                return record
            })
        }
    }
})

export const { addValue, forgotePassword } = registerSlice.actions
export default registerSlice.reducer