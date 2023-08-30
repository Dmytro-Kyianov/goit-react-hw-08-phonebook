import { AiFillDelete } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'components/Loader/Loader';
import { filterForContacts } from 'redux/contacts/filterContactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  getContactsThunk,
  deleteContactsThunk,
} from 'redux/contacts/contactsOperations';

import {
  ContactFrame,
  List,
  ContactWrap,
  DelBtn,
  ContactCard,
  ContactValues,
} from './ContactList.styled';

Notify.init({
  width: '300px',
  position: 'right-top',
  closeButton: false,
  timeout: 2500,
});

export const ContactList = () => {
  const { contacts, error, isLoading } = useSelector(state => state.contacts);
  const filter = useSelector(filterForContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <Spinner />}
      {error && Notify.failure(error)}
      {filteredContacts && (
        <ContactWrap>
          {filteredContacts.map(({ name, number, id }) => (
            <List key={id}>
              <ContactFrame>
                <ContactCard>
                  <ContactValues>{name} :</ContactValues>
                  <ContactValues>{number}</ContactValues>
                </ContactCard>

                <DelBtn
                  type="button"
                  onClick={() => dispatch(deleteContactsThunk(id))}
                >
                  <IconContext.Provider value={{ size: '25' }}>
                    <AiFillDelete />
                  </IconContext.Provider>
                </DelBtn>
              </ContactFrame>
            </List>
          ))}
        </ContactWrap>
      )}
    </>
  );
};