import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../modules/userSlice';
import selectItem from '../modules/selectItem';

const store = configureStore({
  reducer: {
    userSlice,
    selectItem,
  },
});

export default store;
