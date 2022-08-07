import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div className={style.profile}>
            <ProfileInfo newStatusValue = {props.newStatusValue} updateUserStatusActionCreator = {props.updateUserStatusActionCreator} updateUserStatusThunkCreator = {props.updateUserStatusThunkCreator} profile = {props.profile} status={props.status}/>
            <MyPostContainer />
        </div>
    );
}


export default Profile;