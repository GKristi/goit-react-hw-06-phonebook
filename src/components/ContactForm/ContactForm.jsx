import { useState } from 'react';
import {
    FormButton,
    Form,
    FormInputContainer,
    InputField,
    InputLabel,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContactAction } from 'redux/contact/slice';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const { contacts } = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const addContact = e => {
        e.preventDefault();
        const isTrue = contacts.some(contact => name === contact.name);
        if (isTrue) {
            Notify.failure(`${name} is already in contacts`);
            return;
        }
        dispatch(addContactAction({ name, number, id: nanoid() }));
        setName('');
        setNumber('');
    };

    const getContactData = ({ target: { name, value } }) => {
        if (name === 'name') setName(value);
        else setNumber(value);
    };

    return (
        <Form onSubmit={addContact}>
            <FormInputContainer>
                <InputField
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    autoComplete="off"
                    onChange={getContactData}
                    value={number}
                    required
                />
                <InputLabel>Number</InputLabel>
                <InputField
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    autoComplete="off"
                    value={name}
                    onChange={getContactData}
                    required
                />
                <InputLabel>Name</InputLabel>
            </FormInputContainer>
            <FormButton type="submit">Add contact</FormButton>
        </Form>
    );
};
export default ContactForm;