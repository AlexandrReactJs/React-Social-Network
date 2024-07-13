import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader"
import Noavatar from "../../../assets/images/noavatar.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <>Loading</>
    }


    return(
        <div className={style.profileInfo}>
                <div className={style.profileAvatar}>
                    {props.profile.photos.large ? <img className={style.avatar} src={props.profile.photos.large} alt="avatar" /> : <img className={style.noavatar} src={Noavatar} alt="no avatar"/>}

                </div>
                <div className={style.profileDesription}>
                    <h3>{props.profile.fullName}</h3>
                   
                    <ProfileStatus userId = {props.userId}/>
                    {/*<Contacts profile = {props.profile}/>*/}
                </div>
            </div>
    );
}

export default ProfileInfo;