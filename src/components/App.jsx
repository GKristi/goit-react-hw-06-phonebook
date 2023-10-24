import { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './index.styled';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      setContacts(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    return () => {
      localStorage.removeItem('contacts');
    };
  }, [contacts]);

  const addContactData = newContact => {
    const isTrue = contacts.some(({ name }) => name === newContact.name);
    if (isTrue) {
      Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(contacts => [newContact, ...contacts]);
  };

  const removeContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const getFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const getFilterData = ({ target: { value } }) => {
    setFilter(value);
  };

  const filterContacts = getFilterContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContactData={addContactData} />
      <h2>Contacts</h2>
      <Filter filter={filter} getFilterData={getFilterData} />
      <ContactList
        contacts={filterContacts}
        removeContact={removeContact}
        getFilterContacts={getFilterContacts}
      />
    </Container>
  );
};

export default App;