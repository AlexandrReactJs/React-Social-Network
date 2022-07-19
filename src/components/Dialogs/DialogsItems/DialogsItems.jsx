import React from "react";
import {Link} from "react-router-dom";


const DialogsItems = (props) => {
    return(
        <div>
            <Link to={"/dialogs/" + props.id}>{props.name}</Link>
        </div>
    );
}


export default DialogsItems;