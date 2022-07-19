import React from "react";
import style from "./Dialogs.module.css"
import MessagesItems from "./MessagesItems/MessagesItems";
import DialogsItems from "./DialogsItems/DialogsItems";



let a = {
    name: " www.com",
    age: 18,
    protocol: "https",
    students: ["alex", "valera","egor"],
    classroom:{
        teacher:{
            name: "alex",
            age: 18
        }
        
    }
};

let b = {
    ...a
}
b.students = {...a.students}
b.classroom = {...a.classroom}
b.classroom.teacher = {...a.classroom.teacher}

b.students[0]="egor"
b.classroom.teacher.name = "egor"

console.log(a)




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