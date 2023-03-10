import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './itemsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: {
      items: contactsSlice.reducer,
      filter: filterSlice.reducer,
    },
  },
});
