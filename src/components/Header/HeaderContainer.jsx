import React from "react";
import Hedaer from "./Hedaer";
import * as axios from "axios"
import { connect } from "react-redux";
import { setUserDataActionCreator } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";



const HeaderContainer = (props) => {
    React.useEffect(() =>{
        authAPI.getUserAuthData().then(data => {
            debugger
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                props.setUserDataActionCreator(id, email, login);
            }
        })
    }, []);
    return(
        <Hedaer {...props}/>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setUserDataActionCreator}) (HeaderContainer);
