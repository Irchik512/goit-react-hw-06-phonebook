import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { apdateFilter } from 'redux/filterSlice';

export default function App() {
  // filterValueSlice.initialState = useLocalStorage('contacts', []);

  const inputChangeHandle = evt => apdateFilter(evt.currentTarget.value);

  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const contactsList = useSelector(state => state.contacts.item);
  const filterValue = useSelector(state => state.contacts.filter);
  return (
    <>
      <Section>
        <h2>Phonebook</h2>
        <ContactForm /*onSubmit={formSubmitHandler}*/ />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {contactsList.length < 1 ? (
          <Notification message="There is no contact yet." />
        ) : (
          <>
            <Filter value={filterValue} onChange={inputChangeHandle} />
            <ContactList />
          </>
        )}
      </Section>
    </>
  );
}
