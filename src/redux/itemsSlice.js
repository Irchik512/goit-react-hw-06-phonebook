import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  reducers: {
    create(state, action) {
      state.push(action.payload);
      return state;
    },

    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },

    filteredByName(state, action) {
      const normalizedFilter = action.payload.toLowerCase();
      return state.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
  },
});

export const { create, remove, filteredByName } = contactsSlice.actions;
