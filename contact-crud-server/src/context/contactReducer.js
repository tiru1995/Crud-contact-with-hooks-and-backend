import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CONTACTS,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CLEAR_CURRENT,
    CONTACT_ERROR,
    GET_CONTACTS
}from '../types'

export default (state,action)=>{
    switch(action.type){
        case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

        case ADD_CONTACT: return{
            ...state,contacts:[...state.contacts,action.payload]
        }
        case DELETE_CONTACT:
            
            return{
                ...state,contacts: state.contacts.filter(contact => contact._id !== action.payload)
            }

            case SET_CURRENT:
                return{...state,current:action.payload}
            
                case  CLEAR_CURRENT:
                    return{
                        ...state,current:null
                    }
                case UPDATE_CONTACT:
                    return{
                        ...state,contacts:state.contacts.map(contact=>contact._id===action.payload._id? action.payload:contact)
                    }
                    case FILTER_CONTACTS:
                        return{
                            ...state,filtered:state.contacts.filter(contact => {
                                const regex = new RegExp(`${action.payload}`, 'gi');
                                return contact.name.match(regex) || contact.email.match(regex);
                              })
                        }
                        case CLEAR_FILTER:
                            return {
                              ...state,
                              filtered: null
                            }
                            case CONTACT_ERROR:
                                return {
                                  ...state,
                                  error: action.payload
                                }
        
        
        default:
            return state
    }
}