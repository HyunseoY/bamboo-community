import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const selectItem = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { selectedItem } = selectItem.actions;
export default selectItem.reducer;
