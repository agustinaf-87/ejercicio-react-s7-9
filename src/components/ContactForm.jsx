import React, { useRef } from 'react';

const ContactForm = ({addingContact}) => {
    const name = useRef ("");
    const email = useRef("");

    function addContact(e){
        e.preventDefault();

        const newContact = {
            name: name.current.value,
            email: email.current.value,
            online: true
        }

        addingContact(newContact);
        name.current.value ="";
        email.current.value ="";
    }
    
    return (
        <form onSubmit={addContact} className="contact-form" >
        <h2> Add new Contact</h2>
        <input ref={name} name="name" placeholder='name' className='form-control mb-2'/>
        <inut ref={email} email="email" placeholder="email" />
        <button onClick={addContact} type="submit" className='submit-button'>Add </button>

        </form>
    );
}

export default ContactForm;
