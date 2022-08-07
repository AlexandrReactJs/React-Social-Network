import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router";
import { setUserProfileThunkCreator } from "../../redux/profile-reducer";
import { setUserStatusThunkCreator } from "../../redux/profile-reducer";
import { updateUserStatusActionCreator } from "../../redux/profile-reducer";
import { updateUserStatusThunkCreator } from "../../redux/profile-reducer";
import { WithAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux"


const ProfileContainer = ({updateUserStatusActionCreator, updateUserStatusThunkCreator, setUserProfileThunkCreator, setUserStatusThunkCreator, profile, status, newStatusValue}) => {
    const { id } = useParams();
    const setUser = React.useCallback(() => {
        setUserProfileThunkCreator(id);
    }, [id, setUserProfileThunkCreator]);

    const setUserStatus = React.useCallback(() => {
        setUserStatusThunkCreator(id);
    }, [id, setUserStatusThunkCreator]);

    React.useEffect(() => {
        setUser();
        setUserStatus();
    }, [setUser, setUserStatus]);

    
   
    return (
        
            <Profile newStatusValue = {newStatusValue} updateUserStatusActionCreator = {updateUserStatusActionCreator} updateUserStatusThunkCreator = {updateUserStatusThunkCreator} profile= {profile} status= {status} id= {id}/>
        
    );
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    newStatusValue: state.profilePage.newStatusValue
});






export default compose(
    connect(mapStateToProps, { setUserProfileThunkCreator, setUserStatusThunkCreator, updateUserStatusThunkCreator, updateUserStatusActionCreator }),
    WithAuthRedirect 
)(ProfileContainer)