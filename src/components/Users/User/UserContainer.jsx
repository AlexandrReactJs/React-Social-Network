import React from "react";
import User from './User';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setCurrentPage } from "../../../RTK/slices/users-slice";
import { follow } from "../../../RTK/slices/users-slice";
import { unfollow } from "../../../RTK/slices/users-slice";



const UserContainer = () => {
    const dispatch = useDispatch()


    const { users, pageSize, totalUsersCount, currentPage, isRequestParams } = useSelector(state => state.users)
    const isAuth = useSelector(state => state.auth.isAuth)




    React.useEffect(() => {
        dispatch(fetchUsers({ currentPage, pageSize }))
    }, [currentPage, pageSize]);


    const onCurrentPageChange = (pageNum) => {
        dispatch(setCurrentPage(pageNum))
    }



    return (

        <User totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onCurrentPageChange={onCurrentPageChange}
            users={users}
            unfollow={unfollow}
            follow={follow}
            isRequestParams={isRequestParams} isAuth={isAuth} />


    );
}


export default UserContainer;

