import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
    
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );  
 
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;


