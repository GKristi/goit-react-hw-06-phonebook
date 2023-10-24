import { useDispatch } from 'react-redux';
import {
    ContactDeleteBtn,
    ContactItem,
    ContactTextName,
    ContactTextNumber,
} from './ContactListItem.styled';
import { removeContactAction } from 'redux/contact/slice';

const ContactListItem = ({ contacts }) => {
    const dispatch = useDispatch();
    return contacts.map(({ id, name, number }) => {
        return (
            <ContactItem key={id}>
                <ContactTextName>{name}:</ContactTextName>
                <ContactTextNumber>{number}</ContactTextNumber>
                <ContactDeleteBtn onClick={() => dispatch(removeContactAction(id))}>
                    delete
                </ContactDeleteBtn>
            </ContactItem>
        );
    });
};

export default ContactListItem;