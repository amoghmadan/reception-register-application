import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "logged",
  initialState: { isLoggedIn: false, detail: undefined },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.detail = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.detail = undefined;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
