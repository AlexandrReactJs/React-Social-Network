import React from "react";
import Profile from "./Profile";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../RTK/slices/profile-slice";


const ProfileContainer = () => {
    const dispatch = useDispatch()
    
    const profile = useSelector(state =>  state.profile.profile)
    console.log(profile)

    const { id } = useParams();
    
    
    React.useEffect(() => {
  
      dispatch(fetchUserProfile(id))
       
    }, [id]);


    /* updateUserStatusActionCreator = {updateUserStatusActionCreator} updateUserStatusThunkCreator = {updateUserStatusThunkCreator}  status= {status} */
   
    if(!profile) {
      return <>Loading...</>
    }
    
    return (
         
            <Profile profile= {profile} id= {id}/>
        
    );
}



export default ProfileContainer;