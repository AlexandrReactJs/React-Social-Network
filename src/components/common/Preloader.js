import React from "react";
import preloader from "../../assets/images/loader.gif";

let Preloader = (props) => {
    return(
        <div>
             <img src={preloader} alt="Loading" />
        </div>
    )    
}



export default Preloader;