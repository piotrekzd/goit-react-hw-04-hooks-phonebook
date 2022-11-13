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
  
  const [firstRender, setRender] = useState(true);
  const [filter, setFilter] = useState('');
  useEffect(() => { }, []);

  useEffect(() => {
    if (firstRender) {
      const localContacts = localStorage.getItem('contacts');

      if (localContacts !== 'undefined') {
        const parseContacts = JSON.parse(localContacts);

        if (parseContacts) {
          setContacts(parseContacts);
        };
      };
      setRender(false);
    } else {
      localStorage.setItem('contacts', JSON.stringify('contacts'));
    };
  }, [contacts, firstRender]);
  
  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };
  
  const handleSubmit = e => {
    const name = e.name;
    const number = e.number;
    const contactsList = [...contacts];
    const id = nanoid();

    if (contactsList.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in your contacts.`)
    } else {
      contactsList.push({ id, name, number });
    };
    setContacts(contactsList)
  };
  
  const handleFilter = () => {
    const filterContacts = contacts.filter(contact => {
      const lowerCase = filter.toLowerCase();
      return contact.name.toLowerCase().includes(lowerCase);
    });
    return filterContacts;
  };

  const deleteContact = idToDelete => {
    setContacts(contacts.filter(contact => contact.id !== idToDelete));
  };
  
  return (
    <div>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <Filter filter={filter} onChange={handleChange} />
      {contacts.length === 0 ? (
        <p className={style.paragraph}>There are no contacts on your list yet</p>
      ) : (
        <ContactList
          contacts={handleFilter()}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
};