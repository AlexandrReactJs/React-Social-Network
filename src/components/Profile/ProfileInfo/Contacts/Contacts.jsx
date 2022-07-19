import React from "react";

import style from "./Contacts.module.css"


const Contacts = (props) => {

    return (
        <div>
            <h3>Contacts :</h3>
            <div>
                <div className={style.contact}>
                    <span><h4>Facebook :</h4></span>
                    <span>{props.profile.contacts.facebook}</span>
                </div>
                <div className={style.contact}>
                    <span><h4>Website :</h4></span>
                    <span>{props.profile.contacts.website}</span>
                </div>
                <div className={style.contact}>
                    <span><h4>VK :</h4></span>
                    <span>{props.profile.contacts.vk}</span>
                </div>
                <div className={style.contact}>
                    <span><h4>Twitter :</h4></span>
                    <span>{props.profile.contacts.twitter}</span>
                </div>
                <div className={style.contact}>
                    <span><h4>Instagram :</h4></span>
                    <span>{props.profile.contacts.instagram}</span>
                </div>
                <div className={style.contact}>
                    <span><h4>Youtube :</h4></span>
                    <span>{props.profile.contacts.youtube}</span>
                </div>
                <div className={style.contact}>
                    <span><h4>GitHub :</h4></span>
                    <span>{props.profile.contacts.github}</span>
                </div>
                

            </div>
        </div>
    )
}


export default Contacts;