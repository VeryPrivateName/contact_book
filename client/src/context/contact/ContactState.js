import React, { userReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    constact: [
      {
        id: 1,
        name: "John1 Doe1",
        email: "John1Doe1@gmail.com",
        phone: "11111-11111-1111-11111",
        type: "personal"
      },
      {
        id: 2,
        name: "John2 Doe2",
        email: "John2Doe2@gmail.com",
        phone: "22222-2222-222-222",
        type: "personal"
      },
      {
        id: 3,
        name: "John3 Doe3",
        email: "John1Doe1@gmail.com",
        phone: "33333-3333-3333-3333",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
