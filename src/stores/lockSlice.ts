import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LockState {
    lock: boolean
}

const initialState: LockState = {
    lock: false
}

export const lockSlice = createSlice({
    name: 'lockSlice',
    initialState,
    reducers: {
        update: (state: LockState, action: PayloadAction<boolean>) => {
            state.lock = action.payload
        }
    }
})


export const { update } = lockSlice.actions
export default lockSlice.reducer