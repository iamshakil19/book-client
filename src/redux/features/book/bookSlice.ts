import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    handleSearchTerm: (state, action) => {
      state.searchTerm = action.payload as string;
    },
  },
});

export const { handleSearchTerm } = bookSlice.actions;

export default bookSlice.reducer;
