import { connect } from "react-redux";
import React from "react";
import User from './User';
import Preloader from "../../common/Preloader";
import { getUserThunkCreator } from "../../../redux/users-reducer";
import { followThunkCreator } from "../../../redux/users-reducer";
import { unfollowThunkCreator } from "../../../redux/users-reducer";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";


const UserContainer = ({ getUserThunkCreator, totalUsersCount,
    pageSize, currentPage, users,
    unfollowThunkCreator, followThunkCreator, isRequestParams, isAuth }) => {

    const getUser = React.useCallback(() => {
        getUserThunkCreator(currentPage, pageSize);
    }, [getUserThunkCreator, currentPage, pageSize])

    React.useEffect(() => {
        getUser();
    }, [getUser]);

    let onCurrentPageChange = (pageNum) => {
        getUserThunkCreator(pageNum, pageSize);
    }

  

    return (
    
            <User totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onCurrentPageChange={onCurrentPageChange}
                users={users}
                unfollow={unfollowThunkCreator}
                follow={followThunkCreator}
                isRequestParams={isRequestParams} isAuth={isAuth} />
    

    );
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isRequestParams: state.usersPage.isRequestParams,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { followThunkCreator, unfollowThunkCreator, getUserThunkCreator }),
    WithAuthRedirect
)(UserContainer)

