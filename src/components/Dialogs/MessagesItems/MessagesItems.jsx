import React from "react";
import style from "./MessagesItems.module.css";


const MessagesItems = (props) => {
    return(
        <div className={style.MessagesItem}>
            <p>{props.msg}</p>
        </div>
        
    );
}

export default MessagesItems;