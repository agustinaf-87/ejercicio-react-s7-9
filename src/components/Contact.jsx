import React from 'react'

export default function Contact({ contact, modifiedState, remove }) {
  return (
    <div>
        <h2> {contact.name} </h2>
        <p> {contact.email} </p>
        <button
            style={{backgroundColor: contact.state ? "green" : "red"}}
            className= "state-button"
            onClick={()=>{
                modifiedState(contact)
            }}
        >
        {contact.state ? "Online" : "Offline"}
        </button>
        <button
        className='remove-button' 
        onClick={()=> remove(contact)}
        >
        Remove contact
        </button>
    </div>
  )
}
