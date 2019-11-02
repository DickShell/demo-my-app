import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi, how are you?",
          likeCount: 25
        },
        {
          id: 2,
          message: "It's my first post.",
          likeCount: 11
        },
        {
          id: 3,
          message: "Blablabla",
          likeCount: 8
        },
        {
          id: 4,
          message: "Data",
          likeCount: 13
        }
      ],
      newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
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
      ],
      newMessageBody: ""
    }
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //патерн "наблюдатель"
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
