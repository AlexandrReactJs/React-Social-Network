const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

let initialState = {
  dialogs: [
    {id:1, name:"sasha"},
    {id:2, name:"valerik"},
    {id:3, name:"hemul"},
    {id:4, name:"egor"}
  ],
  messages: [
    {id:1, msg:"312"}
  ],
  newChangedText: ''

}

const dialogsReducer = (state = initialState, action) => {


    switch(action.type){
        case SEND_MESSAGE:
            return{
              ...state,
              messages : [...state.messages, {id:5, msg: state.newChangedText}],
              newChangedText : ''
            }                                
        case UPDATE_MESSAGE_TEXT:
            return{
              ...state,
              newChangedText : action.messageText
            }       
        default:
            return state;    
    }
}

export let sendMessageActionCreator = () => {
    return({
      type: SEND_MESSAGE
    })
  }
  
  export let updateMessageTextActionCreator = (text) => {
    return({
      type: UPDATE_MESSAGE_TEXT,
      messageText: text
    })
  }

export default dialogsReducer;