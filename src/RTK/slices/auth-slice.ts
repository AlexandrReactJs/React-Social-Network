import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Slice } from '@reduxjs/toolkit'
import { authAPI } from '../../api/api'


export const fetchUserAuthData = createAsyncThunk(
    'auth/fetchUserAuthData',
    async () => {
        const res = await authAPI.getUserAuthData()
        return res
    }
)







export interface authState {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean

}

const initialState: authState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authSlice: Slice<authState> = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<authState>) => {
            state.userId = action.payload.userId
            state.email = action.payload.email
            state.login = action.payload.login
            state.isAuth = action.payload.isAuth
        },
        logOut: (state) => {
            state.userId = null
            state.email = null
            state.login = null
            state.isAuth = false
        },



    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserAuthData.fulfilled, (state, action) => {
            if (action.payload.resultCode === 0) {
                state.userId = action.payload.data.id
                state.email = action.payload.data.email
                state.login = action.payload.data.login
                state.isAuth = true
            }
        })
    }
})


export const { setAuthData, logOut } = authSlice.actions

export default authSlice.reducer