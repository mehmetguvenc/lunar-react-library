import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoadingState {
    value: number
}

const initialState: LoadingState = {
    value: 0
}

export const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState,
    reducers: {
        update: (state: LoadingState, action: PayloadAction<number>) => {
            state.value = Math.max(action.payload, 0)
        }
    }
})


export const { update } = loadingSlice.actions
export default loadingSlice.reducer