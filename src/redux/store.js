import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReduser } from 'redux/contactsSlice';
import { filterReduser } from 'redux/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ['your/action/type'],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
  //       // Ignore these paths in the state
  //       ignoredPaths: ['items.dates'],
  //     },
  //   }),
});

export const persistor = persistStore(store);
