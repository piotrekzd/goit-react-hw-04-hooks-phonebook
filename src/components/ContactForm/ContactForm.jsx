import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

export const ContactForm = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    let id = nanoid();

    const handleName = e => {
        const { value } = e.target;
        setName(value);
    };

    const handleNumber = e => {
        const { value } = e.target;
        setNumber(value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        handleSubmit({ name: name, number: number });
        form.reset();
    };

    return (
        <form className={style.form} onSubmit={handleFormSubmit}>
            <label htmlFor={id}>Name</label>
            <input
                className={style.input}
                id={id}
                onChange={handleName}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder='Enter name'
                required
            />
            <label htmlFor={id}>Phone</label>
            <input
                className={style.input}
                id={id}
                type="tel"
                name="number"
                value={number}
                onChange={handleNumber}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder='Enter number'
                required
            />
            <button className={style.btn} type="submit">
                Add contact
            </button>
        </form>
    );
};