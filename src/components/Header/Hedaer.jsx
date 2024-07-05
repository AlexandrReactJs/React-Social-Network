import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";





const Hedaer = (props) => {

    return (
        <header className={style.header}>
            <div>
                <h3 className={style.logo}>SOCIAL.<span className={style.logo_wrapper}>NETWORK</span></h3>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <div className={style.auth_info}>
                        <NavLink className={style.link_to_profile} to={'/profile/' + props.userId}>{props.login}</NavLink>
                        <NavLink className={style.logout_button} to="/login" onClick={() => { props.logOut() }}>LogOut</NavLink>

                    </div>
                    : <NavLink className={style.login_button} to='/login'>Login</NavLink>
                }

            </div>

        </header>
    );
}


export default Hedaer;