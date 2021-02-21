import React, { createContext, useReducer } from "react";
import { reducer } from "../reducer/UserReducer";
import uuid from 'react-uuid';
//import reducer, { actionsCeators } from '../reducer/CountReducer';

export const UserContext = createContext();

const initialState = {
  users: [
    { name: "Kawsar Ahamed", email: "imkawsar007@gmail.com", id: uuid() },
    { name: "Ashik Ahamed", email: "imashik007@gmail.com", id: uuid() },
    { name: "Toufik Ahamed", email: "toufik007@gmail.com", id: uuid() },
  ],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action

  //    Remove User
  const removeUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  // Add User
  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  // Edit User
  const editUser = (user) => {
    dispatch({ type: "EDIT_USER", payload: user})
  }

  return (
    <UserContext.Provider value={{ users: state.users, removeUser, addUser, editUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
