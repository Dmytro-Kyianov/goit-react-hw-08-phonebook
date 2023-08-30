import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterContactsSlice';

import { FilterWrap, InputTitle, Input } from './Filter.styled';

export const Filter = () => {
  
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
      <FilterWrap>
        <InputTitle>Find contacts by name</InputTitle>
        <Input
          type="text"
          name="filter"
          onChange={handleInputChange}
          autoComplete="off"
        />
      </FilterWrap>
  );
};