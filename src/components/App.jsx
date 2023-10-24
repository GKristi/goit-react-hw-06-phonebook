import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './index.styled';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;