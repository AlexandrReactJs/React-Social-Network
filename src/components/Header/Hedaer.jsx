import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/Logo.svg"
 
const Hedaer = (props) => {
    
    return(
        <header className={style.header}>
            <img src={Logo} alt="logo" />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
                
            </div>
        </header>
    );
}


export default Hedaer;