/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  deleteBookModal: false,
  bookDeleteId: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    handleSearchTerm: (state, action) => {
      state.searchTerm = action.payload as string;
    },
    handleDeleteBookModal: (state, action) => {
      state.deleteBookModal = action.payload.isOpen;
      state.bookDeleteId = action.payload._id;
    },
  },
});

export const { handleSearchTerm, handleDeleteBookModal } = bookSlice.actions;

export default bookSlice.reducer;
