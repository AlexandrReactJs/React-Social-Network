import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader"
import Contacts from "./Contacts/Contacts";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div className={style.profileInfo}>
                <div className={style.profileAvatar}>

                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div className={style.profileDesription}>
                    <h3>{props.profile.fullName}</h3>
                    <p> {props.profile.aboutMe}</p>
                    <Contacts profile = {props.profile}/>
                </div>
            </div>
    );
}

export default ProfileInfo;