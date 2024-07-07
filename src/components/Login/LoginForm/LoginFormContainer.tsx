import React from "react";
import LoginForm from "./LoginForm";
import { authAPI } from "../../../api/api";
import { useDispatch, useSelector} from "react-redux";
import { fetchUserAuthData } from "../../../RTK/slices/auth-slice";
import { AppDispatch } from "../../../RTK/store";
import { RootState } from "../../../RTK/store";

const LoginFormContainer = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {userId, isAuth} = useSelector((state: RootState) => state.auth)

    const login = (email: string, password: string, rememberMe: boolean) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if(res.data.resultCode === 0) {
                dispatch(fetchUserAuthData())
            }
        })
    }

    return(
        <LoginForm userId = {userId} isAuth={isAuth} login= {login}/>
    )
}

export default LoginFormContainer;