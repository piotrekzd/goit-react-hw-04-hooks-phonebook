import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import style from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const lowerCase = name.toLowerCase();
    let onTheList = false;
    const newContact = { id: nanoid(), name, number };
    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === lowerCase) {
        alert(`${contact.name} is already on the list`);
        onTheList = true;
      };
    });
    if (onTheList) {
      return;
    };
    setContacts(prevState => prevState.concat(newContact));
  };

  const handleChange = e => {
    setFilter(e.currentTarget.value);
  };
  
  const handleFilterChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = idToDelete => {
    setContacts(contacts.filter(contact => contact.id !== idToDelete));
  };
  
  return (
    <div>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={handleChange} />
      {contacts.length === 0 ? (
        <p className={style.paragraph}>There are no contacts on your list yet</p>
      ) : (
        <ContactList
          contacts={handleFilterChange()}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
};