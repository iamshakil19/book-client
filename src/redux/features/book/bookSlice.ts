/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  deleteBookModal: false,
  bookDeleteId: "",
  filterByGenre: "",
  filterByPublication: "",
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
    handleGenreFilter: (state, action) => {
      state.filterByGenre = action.payload;
    },
    handlePublicationFilter: (state, action) => {
      state.filterByPublication = action.payload;
    },
  },
});

export const {
  handleSearchTerm,
  handleDeleteBookModal,
  handleGenreFilter,
  handlePublicationFilter,
} = bookSlice.actions;

export default bookSlice.reducer;
