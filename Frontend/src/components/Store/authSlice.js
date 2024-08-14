import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '../services/localStorageService';

const initialState = loadFromLocalStorage('auth') || { user: null, isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      saveToLocalStorage('auth', state);
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      saveToLocalStorage('auth', state);
    },
    register(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      saveToLocalStorage('auth', state);
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
