// import { useState, useEffect } from 'react';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Form/Form';
import { Section } from './Default.styled';

export const App = () => {
  return (
    <Section>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
};
