import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserStatus, updateUserStatus } from "../../../../RTK/slices/profile-slice";
import { changeStatus } from "../../../../RTK/slices/profile-slice";







const ProfileStatus = (props) => {
    const dispatch = useDispatch()
    const [editStatus, setEditStatus] = React.useState(false)
    const status = useSelector(state => state.profile.status)
    const authMeId = useSelector(state => state.auth.userId)


    React.useEffect(() => {
        dispatch(fetchUserStatus(props.userId))
    }, [props.userId])


    const updateStatus = (status) => {
        dispatch(updateUserStatus(status))
    }


    const onChangeStatus = (text) => {
        dispatch(changeStatus(text))
    }  



    return (
        <div>
            {
                editStatus && authMeId === props.userId ? <div>
                                <input autoFocus={true} onBlur={() => {updateStatus(status); setEditStatus(false)}} type="text" onChange={(e) => {onChangeStatus(e.target.value)}} value={status} />
                            </div> :
                            <div>
                                <span onClick={() => setEditStatus(true)}>Статус: {status}</span>
                            </div>
            }


        </div>
    )
}

export default ProfileStatus;