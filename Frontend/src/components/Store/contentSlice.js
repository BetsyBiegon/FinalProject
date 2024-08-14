import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.js.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript features.' },
  ],
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addContent(state, action) {
      state.items.push({ id: state.items.length + 1, ...action.payload });
    },
    removeContent(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContent, removeContent } = contentSlice.actions;
export default contentSlice.reducer;
