import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router";
import { setUserProfileThunkCreator } from "../../redux/profile-reducer";
import { WithAuthRedirect } from "../HOC/withAuthRedirect";

const ProfileContainer = ({setUserProfileThunkCreator , profile}) => {
    const { id } = useParams();
    const setUser = React.useCallback(() => {
        setUserProfileThunkCreator(id);
    }, [id, setUserProfileThunkCreator])
    React.useEffect(() => {
        setUser();
    }, [setUser]);

    
   
    return (
        
            <Profile profile={profile} />
        
    );
}

let authRedirect = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});




export default connect(mapStateToProps, { setUserProfileThunkCreator })(authRedirect);