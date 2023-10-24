import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const { contacts } = useSelector(state => state.contacts);
    const { filter } = useSelector(state => state.filter);
    const getFilterContacts = () => {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase().trim())
        );
    };
    const filterContacts = getFilterContacts();
    return (
        <>
            <ul>
                <ContactListItem contacts={filterContacts} />
            </ul>
        </>
    );
};

export default ContactList;