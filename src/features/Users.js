import { createSlice } from "@reduxjs/toolkit";
import { fakeUserData } from "../utils/fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: fakeUserData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    updateEmail: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.email = action.payload.email;
        }
      });
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});
export const { addUser, updateEmail, deleteUser } = userSlice.actions;
export default userSlice.reducer;
