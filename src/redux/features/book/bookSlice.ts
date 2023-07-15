/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  deleteBookModal: false,
  bookDeleteId: "",
  filterByGenre: "",
  filterByPublication: "",
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
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
      state.filterByPublication = "";
    },
    handlePublicationFilter: (state, action) => {
      state.filterByPublication = action.payload;
    },
    addToWishlist: (state, action) => {
      const itemIndex = state.wishlist.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        console.log("paoa gece");
        const newWishlist = state.wishlist.filter(
          (item) => item._id !== action.payload._id
        );

        state.wishlist = newWishlist;
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      } else {
        state.wishlist.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
  },
});

export const {
  handleSearchTerm,
  handleDeleteBookModal,
  handleGenreFilter,
  handlePublicationFilter,
  addToWishlist,
} = bookSlice.actions;

export default bookSlice.reducer;
