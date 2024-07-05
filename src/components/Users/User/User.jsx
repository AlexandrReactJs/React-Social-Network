import React from "react";
import style from "./User.module.css";
import userPhoto from "../../../assets/images/noavatar.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";


const User = (props) => {
    const dispatch = useDispatch()


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



    return (
        <div>
            <div className={style.usersPagination}>
                <button className={style.pagination_nav} disabled={fromPagesCount <= 1 ? "disabled" : ""} onClick={() => prevPagination()}>{"<"}</button>
                <div className={style.pages}>
                {

                    pages.map(p => {
                        return <span className={style.link_page} onClick={() => { props.onCurrentPageChange(p) }}>{p}</span>
                    })

                }
                </div>
                <button className={style.pagination_nav} disabled={beforePagesCount === pagesCount ? "disabled" : ""} onClick={() => nextPagination()}>{">"}</button>
            </div>
            {
                props.users.map(u => (
                    <div className={style.user}>

                        <div className={style.user_profile}>
                            <NavLink className={style.user_photo_link} to={"/profile/" + u.id} >
                                <img className={style.user_photo} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                            </NavLink>
                            <div>
                                {u.followed ? <button className={style.toglle_button} disabled={props.isRequestParams.userId === u.id && props.isRequestParams.isRequest ? "disabled" : ""}
                                    onClick={() => { dispatch(props.unfollow(u.id)) }}>Unfollow</button> :
                                    <button className={style.toglle_button} disabled={props.isRequestParams.userId === u.id && props.isRequestParams.isRequest ? "disabled" : ""}
                                        onClick={() => { dispatch(props.follow(u.id)) }}>Follow</button>}

                            </div>

                        </div>
                        <div className={style.user_info}>
                                <h3>{u.name}</h3>
                                <p>Status: {u.status ? u.status : "No status :(("}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}



export default User;