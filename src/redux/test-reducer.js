const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id:1, text: "text title"},
        {id:1, text: "text title"},
        {id:1, text: "text title"},
        {id:1, text: "text title"}
    ],
    newPostText: ""
}

let testReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPostElement = {
                id: 2,
                text: state.newPostText
            };
            state.posts.push(newPostElement);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state    
    }
}

export let addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}

export let updateNewPostTextActionCreator = (text) => {
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text
    }
}


export default testReducer;