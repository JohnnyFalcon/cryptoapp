import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPage: "Home"
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducer: {
    setPage: (state, action) => {
      state.selectedPage = action.payload;
    }
  }
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
