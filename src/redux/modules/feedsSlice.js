import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        contents: action.payload.contents,
        writerId: action.payload.writerId,
        isDeleted: false,
      });
    },
  },
});

export const { addPost } = boardSlice.actions;
export default boardSlice.reducer;
