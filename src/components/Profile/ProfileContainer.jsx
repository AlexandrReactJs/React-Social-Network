import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfileActionCreator } from "../../redux/profile-reducer";
import { useParams } from "react-router";
import * as axios from "axios"
import { profileAPI } from "../../api/api";


const ProfileContainer = (props) => {
    React.useEffect(() => {
        profileAPI.getProfile(id).then(response => {
            debugger
            props.setUserProfileActionCreator(response);
        })
    }, []);

    const {id} = useParams();
    return (
        <div >
            <Profile profile={props.profile} />
        </div>
    );
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});




export default connect(mapStateToProps, { setUserProfileActionCreator })(ProfileContainer);