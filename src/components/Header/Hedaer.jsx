import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Hedaer = (props) => {
    return(
        <header className={style.header}>
            <h1>Logo</h1>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
                
            </div>
        </header>
    );
}


export default Hedaer;