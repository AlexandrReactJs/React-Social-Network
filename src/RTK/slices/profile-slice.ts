import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type {Slice} from '@reduxjs/toolkit'
import { profileAPI } from '../../api/api';



export interface ProfileState {
    posts: Post[],
    profile: Profile | null,
    newPostValue: string,
    status: string,
}

export type Profile = {
    aboutMe: string | null;
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    contacts: {
        github: string | null;
        vk: string | null;
        facebook: string | null;
        instagram: string | null;
        twitter: string | null;
        website: string | null;
        youtube: string | null;
        mainLink: string | null;
    };
    photos: {
        small: string | null;
        large: string | null;
    }
}

export type Post = {
    id: number;
    likeCount: number;
    postText: string;
    userAvatar: string;
}



export const fetchUserProfile = createAsyncThunk(
    "profile/fetchUserProfile",
    async (userId: number) => {
        const res = await profileAPI.getProfile(userId)
        return res
        
    }
)


export const fetchUserStatus = createAsyncThunk(
    "profile/fetchUserStatus",
    async (userId: number) => {
        const res = await profileAPI.getStatus(userId)
        return res
    }
)


export const updateUserStatus = createAsyncThunk(
    'profile/updateUserStatus',
    async (status: string) => {
        const res = await profileAPI.updateStatus(status)

        return res
    }
) 





const initialState: ProfileState = {
    posts: [
        { id: 1, likeCount: 1, postText: "text1", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
        { id: 2, likeCount: 147, postText: "text2", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
        { id: 3, likeCount: 182, postText: "text3", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
        { id: 4, likeCount: 14, postText: "text4", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
        { id: 5, likeCount: 27, postText: "text5", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" }
      ],
      profile: null,
      newPostValue: '',
      status: ""
}


export const profileSlice: Slice<ProfileState> = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.profile = action.payload
        }).addCase(fetchUserStatus.fulfilled, (state, action) => {
            state.status = action.payload.data
        })
    }
})


export const { changeStatus } = profileSlice.actions

export default profileSlice.reducer