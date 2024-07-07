import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";



interface Props {
    userId: number | null;
    isAuth: boolean | null;
    login: string | null
    logOut: () => void
}




const Hedaer : React.FC<Props> = ({userId, isAuth, login, logOut}) => {

    return (
        <header className={style.header}>
            <div>
                <h3 className={style.logo}>SOCIAL.<span className={style.logo_wrapper}>NETWORK</span></h3>
            </div>
            <div className={style.loginBlock}>
                {isAuth ?
                    <div className={style.auth_info}>
                        <NavLink className={style.link_to_profile} to={'/profile/' + userId}>{login}</NavLink>
                        <NavLink className={style.logout_button} to="/login" onClick={() => { logOut() }}>LogOut</NavLink>

                    </div>
                    : <NavLink className={style.login_button} to='/login'>Login</NavLink>
                }

            </div>

        </header>
    );
}


export default Hedaer;