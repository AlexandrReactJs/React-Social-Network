import React from "react";
import Hedaer from "./Hedaer";
import { useSelector, useDispatch } from "react-redux";
import { authAPI } from "../../api/api";
import { logOut } from "../../RTK/slices/auth-slice";
import type { RootState } from "../../RTK/store";



const HeaderContainer = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state: RootState) => state.auth)


    const fetchLogOut = () => {
        authAPI.logOut().then(res => {
            if(res.data.resultCode === 0) {
                dispatch(logOut)
            }
        })
    }

  

    return (
        <Hedaer userId = {userData.userId} isAuth = {userData.isAuth} login = {userData.login} logOut= {fetchLogOut}/>
    )
}

export default HeaderContainer;
