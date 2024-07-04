import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './fetchSlice';


const store = configureStore({
    reducer: {
        users: fetchSlice
    }
});

export default store;
