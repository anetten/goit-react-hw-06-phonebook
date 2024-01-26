import React, { useState } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/contactsReducer';
import { useDispatch, useSelector } from 'react-redux';

export const PhoneBook = ({ handleAddForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);

  const handleAddContact = () => {
    const hasDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const id = nanoid();
    const newContact = {
      id,
      name,
      number: Number(number),
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} action="" onSubmit={handleAddContact}>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Name</span>
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Number</span>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
