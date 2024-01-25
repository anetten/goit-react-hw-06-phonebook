import { useSelector } from 'react-redux';
import css from './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => {
  const state = useSelector(store => store);
  console.log('state:', state);

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
