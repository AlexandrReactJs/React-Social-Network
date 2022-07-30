import React from "react";
import style from "./User.module.css";
import userPhoto from "../../../assets/images/noavatar.jpg";
import { NavLink } from "react-router-dom";



const User = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    let [fromPagesCount, setFromPagesCount] = React.useState(1);
    let [beforePagesCount, setBeforePagesCount] = React.useState(10);

    for (let i = fromPagesCount; i <= beforePagesCount; i++) {
        pages.push(i);
    }

    const nextPagination = () => {


        setFromPagesCount(fromPagesCount + 10)
        setBeforePagesCount(beforePagesCount + 10)
        for (let i = fromPagesCount; i <= beforePagesCount; i++) {
            pages = []
            pages.push(i);
        }

    }

    const prevPagination = () => {
        setFromPagesCount(fromPagesCount - 10)
        setBeforePagesCount(beforePagesCount - 10)
        for (let i = fromPagesCount; i <= beforePagesCount; i++) {
            pages = []
            pages.push(i);
        }
    }

   
    
    return(
        <div>
            <div className={style.usersPagination}>
                <button disabled={fromPagesCount <= 1 ? "disabled" : ""} onClick={() => prevPagination()}>Prev</button>
                {

                    pages.map(p => {
                        return <span className={props.currentPage === p && style.active} onClick={(e) => { props.onCurrentPageChange(p) }}>{p}</span>
                    })

                }
                <button disabled={beforePagesCount === pagesCount ? "disabled" : ""} onClick={() => nextPagination()}>Next</button>
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
                                    {u.followed ? <button disabled={props.isRequestParams.userId === u.id && props.isRequestParams.isRequest ? "disabled" : ""}
                                        onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                        <button disabled={props.isRequestParams.userId === u.id && props.isRequestParams.isRequest ? "disabled" : ""}
                                            onClick={() => { props.follow(u.id) }}>Follow</button>}

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
    )
}



export default User;