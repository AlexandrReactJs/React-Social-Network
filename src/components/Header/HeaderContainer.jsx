import React from "react";
import Hedaer from "./Hedaer";
import { connect } from "react-redux";
import {logOutThunkCreator} from "../../redux/auth-reducer"





const HeaderContainer = ({logOutThunkCreator, isAuth, login, userId}) => {


    return (
        <Hedaer userId = {userId} isAuth = {isAuth} login = {login} logOutThunkCreator={logOutThunkCreator}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userid: state.auth.userId
})


export default connect(mapStateToProps, { logOutThunkCreator })(HeaderContainer);
