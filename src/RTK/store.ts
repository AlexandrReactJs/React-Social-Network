import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import usersReducer from "./slices/users-slice";
import profileReducer from "./slices/profile-slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        profile: profileReducer
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch