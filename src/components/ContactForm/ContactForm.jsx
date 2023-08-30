import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContactsThunk } from 'redux/contacts/contactsOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  FormWrap,
  InputWrap,
  InputTitle,
  Input,
  AddBtn,
} from './ContactForm.styled';

Notify.init({
  width: '300px',
  position: 'right-top',
  closeButton: false,
  timeout: 2500,
});

export const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const newContact = { name: name, number: number };

  const handleSubmit = e => {
    e.preventDefault(e);
    contacts.find(contact => contact.name === name)
      ? Notify.warning(`${name} is already in contacts`)
      : dispatch(addContactsThunk(newContact));

    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberImputId = nanoid();
  return ( 
    <FormWrap onSubmit={handleSubmit}>
      <InputWrap>
        <InputTitle htmlFor={nameInputId}>Name</InputTitle>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </InputWrap>
      <InputWrap>
        <InputTitle htmlFor={numberImputId}>Number</InputTitle>
        <Input
          id={numberImputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          autoComplete="off"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrap>

      <AddBtn type="submit" >
        Add contact
      </AddBtn>
    </FormWrap>
  );
};