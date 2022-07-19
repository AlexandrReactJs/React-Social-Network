import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setIsFetchingActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../../redux/users-reducer";
import React from "react";
import User from './User';
import Preloader from "../../common/Preloader";
import { getUserThunkCreator } from "../../../redux/users-reducer";



const UserContainer = (props) => {
    React.useEffect(() => {
        props.getUserThunkCreator(props.currentPage, props.pageSize);
    }, []);

    let onCurrentPageChange = (pageNum) => {
        
        props.getUserThunkCreator(pageNum, props.pageSize);
    }

    return(
        <>
            <Preloader isFetching = {props.isFetching}/>
            <User totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onCurrentPageChange={onCurrentPageChange} users={props.users} unfollow={props.unfollowActionCreator} follow={props.followActionCreator} />
        </>

    );
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}



export default connect(mapStateToProps, {followActionCreator, unfollowActionCreator, getUserThunkCreator})(UserContainer);