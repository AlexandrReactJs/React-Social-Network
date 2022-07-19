import React from "react";
import preloader from "../../assets/images/loader.gif";

let Preloader = (props) => {
    return(
        <div>
            {props.isFetching ? <img src={preloader}/> : null}
        </div>
    )    
}



export default Preloader;