import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default: return state;
    }
}


export let setUserDataActionCreator = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export let getUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getUserAuthData().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserDataActionCreator(id, email, login));
            }
        })
    }
}

export default authReducer;