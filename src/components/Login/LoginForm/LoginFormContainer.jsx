import React from "react";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../../redux/auth-reducer";
import LoginForm from "./LoginForm";


const LoginFormContainer = ({loginThunkCreator, isAuth, userId}) => {
    return(
        <LoginForm userId = {userId} isAuth={isAuth} loginThunkCreator={loginThunkCreator}/>
    )
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}


export default connect(mapStateToProps, {loginThunkCreator})(LoginFormContainer)