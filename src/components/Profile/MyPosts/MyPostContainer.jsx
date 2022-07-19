import { addPostActionCreator, updatePostValueActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";





let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangeText: (text) => {
            dispatch(updatePostValueActionCreator(text));
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;