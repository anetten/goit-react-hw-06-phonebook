import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
} from '../redux/contacts/contactsReducer.js';
import { Contacts, Filter, PhoneBook } from './index.js';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.contacts.filter);

  const handleAddForm = newContact => {
    const hasDublicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (hasDublicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    const action = addContact(newContact);
    dispatch(action);
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#c0c0c0',
      }}
    >
      <h1>Phonebook</h1>
      <PhoneBook handleAddForm={handleAddForm} />

      <h2>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} filterValue={filter} />
      <Contacts
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
