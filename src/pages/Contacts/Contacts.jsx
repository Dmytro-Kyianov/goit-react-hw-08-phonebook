import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title, ContactsWrap } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <Title>PHONEBOOK</Title>
      <ContactForm />
      <ContactsWrap>
        <Filter />
        <div>
          <ContactList />
        </div>
      </ContactsWrap>
    </>
  );
};
export default Contacts;