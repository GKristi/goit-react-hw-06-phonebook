import { combineReducers } from '@reduxjs/toolkit';
import { reducerContact } from './contact/slice';
import { reducerFilter } from './filter/filterSlice';

export const rootReducer = combineReducers({
    contacts: reducerContact,
    filter: reducerFilter,
});