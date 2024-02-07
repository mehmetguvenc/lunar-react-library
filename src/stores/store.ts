import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import lockSlice from './lockSlice';


export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        lock: lockSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;