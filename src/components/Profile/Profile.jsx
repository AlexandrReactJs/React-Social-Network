import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div >
            <ProfileInfo profile = {props.profile}/>
            <MyPostContainer />
        </div>
    );
}


export default Profile;