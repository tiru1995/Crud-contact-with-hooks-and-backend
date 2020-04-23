import React from 'react'
import Contacts from './Contact';
import ContactForm from './contactForm';
import FilterForm from './FilterForm';


 const Home = () => {
    return (
        <div className='grid-2'>
            <div>
            <ContactForm/>
            </div>
            <div>
            <FilterForm/>
            <Contacts/>
            </div>
        </div>
    )
}

export default Home
