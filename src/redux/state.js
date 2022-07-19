import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state : {
    profilePage: {
        posts: [
          {id: 1, likeCount : 1, postText : "text1", userAvatar : "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg"},
          {id: 2, likeCount : 147, postText : "text2", userAvatar : "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg"},
          {id: 3, likeCount : 182, postText : "text3", userAvatar : "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg"},
          {id: 4, likeCount : 14, postText : "text4", userAvatar : "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg"},
          {id: 5, likeCount : 27, postText : "text5", userAvatar : "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg"}
        ],
        newPostValue: ''
    },
    dialogsPage: {
        dialogs: [
          {id:1, name:"sasha"},
          {id:2, name:"valerik"},
          {id:3, name:"hemul"},
          {id:4, name:"egor"}
        ],
        messages: [
          {id:1, msg:"mes 1"},
          {id:2, msg:"mes 2"},
          {id:3, msg:"mes 3"},
          {id:4, msg:"mes 4"}
        ],
        newChangedText: ''

      }

        },
    rerenderAllTree () {
      console.log("change");
    },
    subscribe (observer) {
      this.rerenderAllTree = observer;
    },
    getState(){
      return this._state;
    },

    dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this.rerenderAllTree();

    }

}


export default store;
