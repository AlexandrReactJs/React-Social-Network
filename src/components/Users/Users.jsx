import React from "react";
import UserContainer from "./User/UserContainer";
import style from "./Users.module.css";

const Users = () => {

    return (

        <div className={style.Users}>
            <UserContainer />
        </div>

    );
}


export default Users;