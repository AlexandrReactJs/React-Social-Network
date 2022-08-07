import React from "react";
import style from "./Dialogs.module.css"
import MessagesItems from "./MessagesItems/MessagesItems";
import DialogsItems from "./DialogsItems/DialogsItems";








const Dialogs = (props) => {
    let dialogsItems = props.dialogsPage.dialogs.map(el => (<DialogsItems id={el.id} name={el.name}/>));
    let messagesItems = props.dialogsPage.messages.map(el => (<MessagesItems id={el.id} msg={el.msg}/>));

    let newMessageElement = React.createRef();
    let sendMessage = () => {   
        props.sendMessage();
    }

    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.onChangeMessage(text);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={style.messages}>
                {messagesItems}
                <textarea className={style.messageInput} ref={newMessageElement} onChange={onChangeMessage} value={props.dialogsPage.newChangedText}/>
                <button onClick={sendMessage} className={style.sendMessageBt}>Send</button>
            </div>
        </div>

    );
}


export default Dialogs;