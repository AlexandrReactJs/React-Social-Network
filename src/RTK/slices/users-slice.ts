import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Slice } from '@reduxjs/toolkit'
import { usersAPI } from '../../api/api'



type fetchUsersParamsType = {
    currentPage: any
    pageSize: any
}


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (params: fetchUsersParamsType) => {
        const { currentPage, pageSize } = params
        const res = await usersAPI.getUsers(currentPage, pageSize)
        return res
    }
)

export const follow = createAsyncThunk(
    'users/follow',
    async (userId: number) => {
        const res = await usersAPI.follow(userId)
        return { userId, res }
    }
)

export const unfollow = createAsyncThunk(
    'users/unfollow',
    async (userId: number) => {
        const res = await usersAPI.unfollow(userId)
        return { userId, res }
    }
)



export interface usersState {
    users: user[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isRequestParams: isRequestParamsType

}

type user = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}


type isRequestParamsType = {
    isRequest: boolean
    userId: number | null

}


const initialState: usersState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isRequestParams: { isRequest: false, userId: null }
}



export const usersSlice: Slice<usersState> = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },

        setIsRequestParams: (state, action) => {
            state.isRequestParams.isRequest = action.payload.isRequest;
            state.isRequestParams.userId = action.payload.userId
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.items
            state.totalUsersCount = action.payload.totalCount
        })
            .addCase(follow.fulfilled, (state, action) => {
                if (action.payload.res.resultCode === 0) {
                    const found = state.users.find(el => el.id === action.payload.userId)
                    if (found) {
                        found.followed = true
                    }
                }
            }).addCase(unfollow.fulfilled, (state, action) => {
                const found = state.users.find(el => el.id === action.payload.userId)
                    if (found) {
                        found.followed = false
                    }
                    state.isRequestParams.isRequest = false;
                    state.isRequestParams.userId = action.payload.userId    
            })
    }
})


export const { setCurrentPage, setIsRequestParams } = usersSlice.actions

export default usersSlice.reducer