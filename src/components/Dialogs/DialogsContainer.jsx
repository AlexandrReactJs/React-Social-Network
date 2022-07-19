
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;