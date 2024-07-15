import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const handleSearch = value => {
    setSearchName(value);
  };

  // const data = contacts.filter(obj => obj.name.includes('i'));
  // console.log(data);

  useEffect(() => {
    setContacts(prev => prev.filter(obj => obj.name.includes(searchName)));
  }, [searchName]);

  console.log(contacts);

  // useEffect(() => {
  //   let array = contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(searchName.toLowerCase());
  //   });
  //   // setContacts(prev => [...prev, array]);
  // }, [searchName]);

  // useEffect(() => {
  //   setContacts(prev => {
  //     return prev.filter(cont => {
  //       return cont.name.toLowerCase().includes(searchName.toLowerCase());
  //     });
  //   });
  // }, [searchName]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox onSearch={handleSearch} />
      {/* <ContactList data={contacts} value={searchName} /> */}
    </div>
  );
};

export default App;
