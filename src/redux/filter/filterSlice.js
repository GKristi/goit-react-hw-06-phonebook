import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './filterInitialState';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.filter = payload;
        },
    },
});

export const reducerFilter = filterSlice.reducer;
export const setFilter = filterSlice.actions.setFilter;