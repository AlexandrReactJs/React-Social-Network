import React from "react";
import style from "./User.module.css";
import userPhoto from "../../../assets/images/noavatar.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";

const User = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for(let i=1; i <= pagesCount; i++){
            pages.push(i);
        }
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const [followUserId, setFollowUserId] = React.useState(0); 

    return <div>
        <div className={style.usersPagination}>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && style.active} onClick={(e) => {props.onCurrentPageChange(p)}}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => (
                <div className={style.user}>
                    <div className={style.userPhoto}>
                        <div>
                            <NavLink to={"/profile/" + u.id} >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                            </NavLink>
                            <div>
                                {u.followed ? <button disabled={followUserId === u.id && buttonDisable ? "disabled" : ""} onClick={() => {
                                    setFollowUserId(u.id)
                                    setButtonDisable(true);
                                    usersAPI.unfollow(u.id).then(data => {
                                        setButtonDisable(false);
                                        let resultCode = data.resultCode;
                                        if(resultCode === 0){
                                            props.unfollow(u.id);
                                        }
                                    })

                                    
                                }}>Unfollow</button>
                                 : <button disabled={followUserId === u.id && buttonDisable ? "disabled" : ""} onClick={() => {
                                    setFollowUserId(u.id);
                                    setButtonDisable(true);
                                    usersAPI.follow(u.id).then(data => {
                                        setButtonDisable(false);
                                        let resultCode = data.resultCode;
                                        if(resultCode === 0){
                                            props.follow(u.id);
                                        }
                                    })

                                    
                                    }}>Follow</button>}

                            </div>
                        </div>
                    </div>
                    <div className={style.userInfo}>
                        <div className={style.userInfoName}>
                            <h3>{u.name}</h3>
                            <p>{u.status}</p>
                        </div>
                        <div className={style.userInfoLocation}>
                            <p>{"u.location.sity"}</p>
                            <p>{"u.location.counrty"}</p>
                        </div>

                    </div>
                </div>

            ))
        }

    </div>
}



export default User;