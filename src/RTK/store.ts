import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import usersReducer from "./slices/users-slice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch