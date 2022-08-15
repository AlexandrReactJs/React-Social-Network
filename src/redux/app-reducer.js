import { getUserDataThunkCreator } from "./auth-reducer";

const SET_INITIALIZE = "SET_INITIALIZE";


let initialState = {
    isInitialize: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return{
                ...state, isInitialize: true
            }
        default:
            return state;    
    }
}


const setInitializeActionCreator = () => {
    return{
        type: SET_INITIALIZE
    }
}

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(getUserDataThunkCreator());

        promise.then(() => {
            dispatch(setInitializeActionCreator());
        })
    }
}

export default appReducer;