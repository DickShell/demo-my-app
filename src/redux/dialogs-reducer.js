const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dikk"
    },
    {
      id: 2,
      name: "Oksik"
    },
    {
      id: 3,
      name: "Jhon"
    },
    {
      id: 4,
      name: "Marry"
    },
    {
      id: 5,
      name: "Bill"
    }
  ],
  messages: [
    {
      id: 1,
      message: "Hi"
    },
    {
      id: 2,
      message: "How are you?"
    },
    {
      id: 3,
      message: "Yo!"
    },
    {
      id: 4,
      message: "Yo!"
    },
    {
      id: 5,
      message: "Yo!"
    }
  ]
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 6,
            message: body
          }
        ]
      };
    default:
      return state;
  }
};

export const sendMessage = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;
