import React, {useContext,Fragment,useEffect}from 'react'
import contactContext from '../context/contactContext';
import ContactItem from './contactItem';
 
const Contacts = () => {
     const contactsContext = useContext(contactContext)
     const{contacts,filtered,getContacts}= contactsContext
    
     useEffect(() => {
        getContacts();
    // eslint-disable-next-line
     }, [])
    return (
        
        <Fragment>
        {filtered !== null ? filtered.map(contact=>(
        <ContactItem key={contact._id} contact={contact}/>
     )) : contacts.map(contact=>(
        <ContactItem key={contact._id} contact={contact}/>
     ))}
              
            </Fragment>
        )
}
export default Contacts;