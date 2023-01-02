import './App.css';
import { useState } from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

function App() {

  const contactDefault = [
    {
    name: "Marcos",
    email: "marcos@gmail.com",
    online: true
    },
    {
    name: "Agustina",
    email: "agustina@gmail.com",
    online: true
    },
    {
    name:"Fermin",
    email:"fermin@gmail.com",
    online:false
    }
  ]

  const [newContact, setnewContact] = useState(contactDefault);

  function modifiedState(contact){
  const i= newContact.indexOf(contact);
  const aux = [...newContact];

  aux[i].state = ! aux[i].state;
  setnewContact(aux);
  }

  function remove(contact){
    const i= newContact.indexOf(contact);
    const aux = [...newContact];

    aux.splice(i, 1);
    setnewContact(aux);
  }

  function addContact(contact){
    const aux = [...newContact];
    aux.push(contact);
    setnewContact(aux);
  }


  return (
    <div className="App">
    <h1> Contacts </h1>
    <div className='contact-container'>
    {newContact.map((contact, i) => {
      return (
        <Contact key= {i} contact ={contact} modifiedState= {modifiedState} remove= {remove}/>
        
      )
    })}
    </div>
      <ContactForm addingContact={addContact}/>
    </div>
  );
}

export default App;
