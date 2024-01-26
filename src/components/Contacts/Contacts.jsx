import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { deleteContact } from '../../redux/contacts/contactsReducer';

export const Contacts = () => {
  const contacts = useSelector(store => store.contacts.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contacts}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
