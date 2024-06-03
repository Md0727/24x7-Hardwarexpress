import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import registerSlice from '../features/register/registerSlice'
import ProductSlice from './slice/ProductSlice';
import CartIdSlice from './slice/CartIdSlice';
import SearchSlice from './slice/SearchSlice';
import StorePageIdSlice from './slice/StorePageIdSlice';
import GuestsSlice from './slice/GuestsSlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    user: registerSlice,
    product: ProductSlice,
    cartId: CartIdSlice,
    saveSearchID: SearchSlice,
    StorePageIdSlice: StorePageIdSlice,
    GuestsSlice: GuestsSlice
});

export const store = configureStore({
    reducer: rootReducer,
});