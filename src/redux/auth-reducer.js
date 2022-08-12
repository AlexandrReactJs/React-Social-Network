import { authAPI } from "../api/api";


const SET_USER_DATA = "SET-USER-DATA";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
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


export const setUserDataActionCreator = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });



export const getUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getUserAuthData().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserDataActionCreator(id, email, login));
            }
        })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            debugger
            if(response.data.resultCode === 0) {
                dispatch(getUserDataThunkCreator())
            }
        })
    }
}

export const logOutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logOut().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserDataActionCreator(null, null, null, false))
            }
        })
    }
}

export default authReducer;