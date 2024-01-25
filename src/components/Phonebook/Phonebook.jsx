import React, { useState } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

export const PhoneBook = ({ handleAddForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFromSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    const newContact = {
      id,
      name,
      number: Number(number),
    };

    handleAddForm(newContact);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} action="" onSubmit={handleFromSubmit}>
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
