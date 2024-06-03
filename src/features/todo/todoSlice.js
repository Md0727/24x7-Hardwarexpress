import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, email: "alam@gmail.com", password: '1234'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                email: action.payload.email,
                password: action.payload.password
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item?.id !== action.payload.id)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;