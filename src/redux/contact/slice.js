import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContactAction: (state, { payload }) => {
            state.contacts.push(payload);
        },
        removeContactAction: (state, { payload }) => {
            state.contacts = state.contacts.filter(contact => contact.id !== payload);
        },
    },
});

export const reducerContact = slice.reducer;
export const {
    addContactAction,
    removeContactAction,
    getFilteredContactsAction,
} = slice.actions;