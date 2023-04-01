import { ListItem } from './ListItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filteredQuery = useSelector(getFilter);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredQuery.toLowerCase())
  );
  return (
    <List>
      {filteredContact.map(contact => {
        return <ListItem key={contact.contactId} contacts={contact} />;
      })}
    </List>
  );
};
