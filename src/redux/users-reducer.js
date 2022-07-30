import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRNET_PAGE = "SET-CURRNET-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const SET_IS_REQUEST = "SET-IS-REQUEST";

let inintialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isRequestParams: {isRequest: false, userId: null}
}


const profileReducer = (state = inintialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRNET_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_IS_REQUEST: {
            return { ...state, isRequestParams : {...state.isRequestParams, isRequest: action.isRequest, userId: action.userId}}
        }
        default:
            return state;
    }
}


export let followActionCreator = (userId) => {
    return ({
        type: FOLLOW,
        userId
    })
}

export let unfollowActionCreator = (userId) => {
    return ({
        type: UNFOLLOW,
        userId
    })
}

export let setUsersActionCreator = (users) => {
    return ({
        type: SET_USERS,
        users
    })
}

export let setCurrentPageActionCreator = (currentPage) => {
    return ({
        type: SET_CURRNET_PAGE,
        currentPage
    })
}

export let setTotalUsersCountActionCreator = (totalUsersCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    })

}

export let setIsFetchingActionCreator = (isFetching) => {
    return ({
        type: SET_IS_FETCHING,
        isFetching
    })
}

export let setIsRequestActionCreator = (isRequest, userId) => {
    return ({
        type: SET_IS_REQUEST,
        isRequest,
        userId
    })
}


export let getUserThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setIsFetchingActionCreator(false));
            dispatch(setUsersActionCreator(response.items));
            dispatch(setTotalUsersCountActionCreator(response.totalCount));
        })
    }
}

export let followThunkCreator = (userId) => {

    return (dispatch) => {
        dispatch(setIsRequestActionCreator(true, userId))
        usersAPI.follow(userId).then(data => {
            dispatch(setIsRequestActionCreator(false, userId))
            let resultCode = data.resultCode;
            if (resultCode === 0) {
                dispatch(followActionCreator(userId));
            }
        })
    }
}

export let unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsRequestActionCreator(true, userId))
        usersAPI.unfollow(userId).then(data => {
            dispatch(setIsRequestActionCreator(false, userId));
            let resultCode = data.resultCode;
            if (resultCode === 0) {
                dispatch(unfollowActionCreator(userId));
            }
        })
    }
}
export default profileReducer;