import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/contactSlice';
import { filterContactSlice } from './contacts/filterContactsSlice';
import { authSlice } from './auth/authSlice';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterContactSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  }, middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  }
});

export const persistor = persistStore(store)
