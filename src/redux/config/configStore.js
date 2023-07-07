import { configureStore } from '@reduxjs/toolkit';
import feedsSlice from '../modules/feedsSlice';

const store = configureStore({
  reducer: { feedsSlice },
});

export default store;
