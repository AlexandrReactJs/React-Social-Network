import React from "react";
import style from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";


const Sidebar = () => {
    return(
        <nav className={style.nav}>
            <div>
                <NavLink className={style.nav_link} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink className={style.nav_link} to="/dialogs">Dialogs</NavLink>
            </div>
            <div>
                <NavLink className={style.nav_link} to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink className={style.nav_link} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={style.nav_link} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}


export default Sidebar;