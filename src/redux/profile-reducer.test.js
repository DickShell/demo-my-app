//import React from "react";
//import ReactDOM from "react-dom";
//import App from "./App";
import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
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
  ]
};

it("length of posts should be incremented", () => {
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});
it("message of new post should be it-kamasutra.com", () => {
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});
it("after deleting length of message should be decrement", () => {
  let action = deletePost(10); //защита от неправильного id
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
