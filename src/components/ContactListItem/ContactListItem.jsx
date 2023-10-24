import { ContactDeleteBtn, ContactItem, ContactTextName, ContactTextNumber } from "./ContactListItem.styled"


const ContactListItem = ({ contacts, removeContact }) => {
    return (
        contacts.map(({ id, name, number }) => {
            return <ContactItem key={id}>
                <ContactTextName>{name}:</ContactTextName>
                <ContactTextNumber>{number}</ContactTextNumber>
                <ContactDeleteBtn onClick={() => removeContact(id)}>delete</ContactDeleteBtn>
            </ContactItem>
        })
    )
}

export default ContactListItem