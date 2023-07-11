import { configureStore } from '@reduxjs/toolkit';
import feedsSlice from '../modules/feedsSlice';
import userSlice from '../modules/userSlice';

const store = configureStore({
  reducer: {
    feedsSlice,
    userSlice,
  },
});

export default store;
