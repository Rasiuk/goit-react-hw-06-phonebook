import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsSlice = createSlice({
  name: 'contactsState',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      const existingContact = state.contacts.find(
        contact => contact.name === action.payload.name
      );
      if (existingContact) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.contactId === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
const contactsReducer = contactsSlice.reducer;
const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const { addContact, deleteContact } = contactsSlice.actions;
// Selectors
export const getContacts = state => state.contacts.contacts;
