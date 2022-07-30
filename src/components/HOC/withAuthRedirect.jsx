import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const WithAuthRedirect = (Component) => {
    const AuthRediect = (props) => {
        if(props.isAuth === false) {
            return <Navigate to="/login"/>
        }
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(AuthRediect)
}


let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}