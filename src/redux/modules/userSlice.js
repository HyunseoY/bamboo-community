import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
