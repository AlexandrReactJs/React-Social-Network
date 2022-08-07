import React from "react";
import Hedaer from "./Hedaer";
import { connect } from "react-redux";
import {getUserDataThunkCreator} from "../../redux/auth-reducer"





const HeaderContainer = ({getUserDataThunkCreator, isAuth, login, userId}) => {

    const getUserData = React.useCallback(() => {
        getUserDataThunkCreator();
    }, [getUserDataThunkCreator])
    
   
    React.useEffect(() => {
        getUserData();
    }, [getUserData]);

    return (
        <Hedaer userId = {userId} isAuth = {isAuth} login = {login} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userid: state.auth.userId
})


export default connect(mapStateToProps, { getUserDataThunkCreator })(HeaderContainer);
