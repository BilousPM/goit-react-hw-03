import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
