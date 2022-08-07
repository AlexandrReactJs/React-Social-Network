import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/Logo.svg"
 
const Hedaer = (props) => {
    
    return(
        <header className={style.header}>
            <div>
                <h3>Logo</h3>
            </div>
             {/*<div>
                <NavLink to={'/profile/' + props.userId}>
                    <img src="" alt="avatar"/>
                    <p>{props.login}</p>
                </NavLink>
    </div> */}             
            <div className={style.loginBlock}>
                {props.isAuth ? <NavLink to={'/profile/' + props.userId}>{props.login}</NavLink> : <NavLink to='/login'>Login</NavLink>}
                
            </div>
        </header>
    );
}


export default Hedaer;