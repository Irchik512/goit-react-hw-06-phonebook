import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactList/ContactsListItem';
import { ContactsList } from 'components/ContactList/ContactsList.styled';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contactsList = useSelector(state => state.contacts);

  return (
    <ContactsList>
      {contactsList.map(contact => (
        <ContactsListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ContactsList>
  );
}

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
