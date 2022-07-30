import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../HOC/withAuthRedirect";

const DialogsContainer = (props) => {


    return(
        <Dialogs dialogsPage = {props.dialogsPage} sendMessage = {props.sendMessage} onChangeMessage = {props.onChangeMessage}/>
    )
}

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage : () => {
            dispatch(sendMessageActionCreator());
        },
        onChangeMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        }
    }

}

let authRedirect = WithAuthRedirect(DialogsContainer)


export default connect(mapStateToProps, mapDispatchToProps)(authRedirect);


