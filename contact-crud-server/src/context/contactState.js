import React, {useReducer} from 'react';
import axios from 'axios';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CONTACTS,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    GET_CONTACTS,
    CONTACT_ERROR,
    CLEAR_CURRENT
}from '../types'

const  ContactState= props=>{
    const initialState={

        contacts:[],
          current:null,
          filtered:null
    }

const [state,dispatch]=useReducer(contactReducer,initialState);


const getContacts = async () => {
  try {
    const res = await axios.get('/api/contact');

    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

const addContact = async contact => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/contact', contact, config);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

const deleteContact = async id => {
  try {
    await axios.delete(`/api/contact/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

// Update Contact
const updateContact = async contact => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/contact/${contact._id}`,
      contact,
      config
    );

    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};
   const setCurrent=(contact)=>{
dispatch({type:SET_CURRENT,payload:contact})
}

   
const clearCurrent=()=>{
    dispatch({type:CLEAR_CURRENT})
   }

   const clearFilter=()=>{
    dispatch({type:CLEAR_FILTER})
   }

   const filterContact =(text)=>{
    dispatch({type:FILTER_CONTACTS,payload:text})
    } 


return (
    <contactContext.Provider value={{
        contacts:state.contacts,
        current:state.current,
        filtered:state.filtered,
    addContact,
    deleteContact,
    setCurrent,
    clearCurrent,
    clearFilter,
    filterContact,
    updateContact,
    getContacts
}}>
    {props.children}
    </contactContext.Provider>
)
}
export default ContactState; 