import React from "react";
import Profile from "./Profile";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../RTK/slices/profile-slice";


const ProfileContainer = () => {
    const dispatch = useDispatch()
    
    const {} = useSelector(state =>  state.profile)


    const { id } = useParams();
    
    React.useEffect(() => {
      dispatch(fetchUserProfile(id))
       
    }, []);

    /* updateUserStatusActionCreator = {updateUserStatusActionCreator} updateUserStatusThunkCreator = {updateUserStatusThunkCreator} profile= {profile} status= {status} */
   
    return (
         
            <Profile  id= {id}/>
        
    );
}



export default ProfileContainer;