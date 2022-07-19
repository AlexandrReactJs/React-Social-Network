import React from "react";
import Post from "./Post/Post";
import style from "./MyPost.module.css";






const MyPost = (props) => 
{
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.onChangeText(text);
    }
    let postElement = props.profilePage.posts.map(el => (<Post id = {el.id} likeCount={el.likeCount} postText={el.postText} img={el.userAvatar}/>));

    
    return(
        <div className={style.MyPosts}>
            <h3>My Posts</h3>
            <div className={style.add_post}>
                <textarea ref={newPostElement} onChange={onChangeText} value={props.profilePage.newPostValue} className={style.postInput}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
}

export default MyPost;