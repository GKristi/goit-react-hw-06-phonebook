import ContactListItem from "components/ContactListItem/ContactListItem"

const ContactList = ({ contacts, removeContact }) => {
    return (<>
        <ul>
            <ContactListItem contacts={contacts} removeContact={removeContact} />
        </ul>
    </>
    )
}

export default ContactList