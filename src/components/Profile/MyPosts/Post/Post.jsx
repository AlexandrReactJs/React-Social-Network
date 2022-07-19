import React from "react";
import style from "./Post.module.css"


const Post = (props) => {
    return(
        <div className={style.post}>
            <img src={props.img} alt=""/>
            <p>{props.postText}</p>
            <p>id = {props.id}</p>
            <p>like {props.likeCount}</p>
        </div>
    );
}


export default Post;