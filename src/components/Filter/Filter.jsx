import { setFilter } from 'redux/filter/filterSlice';
import {
    FilterInput,
    FilterInputLabel,
    FilterInputContainer,
} from './Filter.styled';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();
    const getFilterData = ({ target: { value } }) => {
        dispatch(setFilter(value));
    };
    return (
        <FilterInputContainer>
            <FilterInput
                type="text"
                name="filter"
                id="filter"
                onChange={getFilterData}
            />
            <FilterInputLabel htmlFor="filter">
                Find contacts by Name
            </FilterInputLabel>
        </FilterInputContainer>
    );
};

export default Filter;