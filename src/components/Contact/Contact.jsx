import s from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
};

export default Contact;
