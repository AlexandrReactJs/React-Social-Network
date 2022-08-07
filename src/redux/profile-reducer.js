import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_VALUE = "UPDATE-POST-VALUE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";


let inintialState = {
  posts: [
    { id: 1, likeCount: 1, postText: "text1", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
    { id: 2, likeCount: 147, postText: "text2", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
    { id: 3, likeCount: 182, postText: "text3", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
    { id: 4, likeCount: 14, postText: "text4", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" },
    { id: 5, likeCount: 27, postText: "text5", userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg" }
  ],
  profile: null,
  newPostValue: '',
  status: ""
  
}

const profileReducer = (state = inintialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
          id: 6,
          likeCount: 0,
          postText: state.newPostValue,
          userAvatar: "https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg"
        }],
        newPostElement: ''
      }
    case UPDATE_POST_VALUE:
      return {
        ...state,
        newPostValue: action.newPostValue
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return{...state, status: action.status}
    case UPDATE_STATUS:
      return{...state, status: action.newStatus}  
    default:
      return state;
  }
}


export let addPostActionCreator = () => {
  return ({
    type: ADD_POST
  })
}

export let updatePostValueActionCreator = (text) => {
  return ({
    type: UPDATE_POST_VALUE,
    newPostValue: text
  })
}

export let setUserProfileActionCreator = (profile) => {
  return ({
    type: SET_USER_PROFILE,
    profile
  })
}

export let setUserStatusActionCreator = (status) => {
  return({
    type: SET_STATUS,
    status
  })
}

export let updateUserStatusActionCreator = (newStatus) => {
  return({
    type: UPDATE_STATUS,
    newStatus
  })
}

export let updateUserStatusThunkCreator = (newStatus) => {
  return (dispatch) => {
    profileAPI.updateStatus(newStatus).then(response => {
      if(response.data.resultCode === 0){
        dispatch(setUserStatusActionCreator(newStatus))
      }
    })

  }
}


export let setUserStatusThunkCreator = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then(response => {
      dispatch(setUserStatusActionCreator(response.data));
    })
  }
}

export let setUserProfileThunkCreator = (id) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then(response => {
      dispatch(setUserProfileActionCreator(response));
    })

  }
}


export default profileReducer;