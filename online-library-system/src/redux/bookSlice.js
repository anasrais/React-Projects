import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction" },
    { id: 2, title: "1984", author: "George Orwell", category: "fiction" },
    { id: 3, title: "The Selfish Gene", author: "Richard Dawkins", category: "non-fiction" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
