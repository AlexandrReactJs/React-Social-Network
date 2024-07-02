import React from "react";
import LoginForm from "./LoginForm";
import { authAPI } from "../../../api/api";
import { useDispatch, useSelector} from "react-redux";
import { fetchUserAuthData } from "../../../RTK/slices/auth-slice";

const LoginFormContainer = () => {
    const dispatch = useDispatch()
    const {userId, isAuth} = useSelector(state => state.auth)

    const Login = (email, password, rememberMe) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if(res.data.resultCode === 0) {
                dispatch(fetchUserAuthData())
            }
        })
    }

    return(
        <LoginForm userId = {userId} isAuth={isAuth} login= {Login}/>
    )
}

export default LoginFormContainer;