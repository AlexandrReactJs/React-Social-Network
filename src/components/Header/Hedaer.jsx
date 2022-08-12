import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import LogOutIcon from "../../assets/images/logout.png";



const Hedaer = (props) => {

    return (
        <header className={style.header}>
            <div>
                <h3>Logo</h3>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <div className={style.auth_info}>
                        <NavLink className={style.link_to_profile} to={'/profile/' + props.userId}>{props.login}</NavLink>
                        <NavLink className={style.logout_button} to="/login" onClick={() => { props.logOutThunkCreator() }}>LogOut</NavLink>

                    </div>
                    : <NavLink className={style.login_button} to='/login'>Login</NavLink>
                }

            </div>

        </header>
    );
}


export default Hedaer;