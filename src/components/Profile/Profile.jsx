import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div className={style.profile}>
            <ProfileInfo  profile = {props.profile} userId = {props.profile.userId}/>
            {/*<MyPostContainer /> */}
        </div>
    );
}


export default Profile;