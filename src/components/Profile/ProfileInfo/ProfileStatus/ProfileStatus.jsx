import React from "react";


const ProfileStatus = (props) => {
    let statusValue = React.createRef(); 
    const [editStatus, setEditStatus] = React.useState(false)
    const changedStatusValue = () => {
        let text = statusValue.current.value;
        props.updateUserStatusActionCreator(text)
    }
    let updateUserStatus = () => {
        let text = statusValue.current.value;
        props.updateUserStatusThunkCreator(text);
    }
    return (
        <div>
            {
                editStatus ? <div>
                                <input ref={statusValue} autoFocus={true} onBlur={() => {updateUserStatus(); setEditStatus(false);}} onChange = {changedStatusValue} type="text" value={props.status} />
                            </div> :
                            <div>
                                <span onClick={() => setEditStatus(true)}>Статус: {props.status}</span>
                            </div>
            }


        </div>
    )
}

export default ProfileStatus;