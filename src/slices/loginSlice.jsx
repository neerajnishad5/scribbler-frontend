import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (userObject, { rejectWithValue }) => {
    try {
      let res = await axios.post("http://localhost:2121/login", userObject);
      console.log(res);

      if (res.data.Message === "Login successful!") {
        sessionStorage.setItem("token", res.data.token);

        sessionStorage.setItem("status", JSON.stringify(res.data.user));
        return res.data;
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

let status = sessionStorage.getItem("status");
if (status !== "success") {
  status = "idle";
}

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userObj: {},
    status: status,
    role: "",
    errorMessage: "",
  },
  reducers: {
    clearState: (state, actionObj) => {
      state.userObj = {};
      state.errorMessage = "";
      state.status = "idle";
      state.role = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.status = "pending";
      // console.log("action from bulider addCase1: ", action);
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      // console.log("action from bulider addCase2: ", action);
      state.userObj = action.payload.user;
      state.errorMessage = "";
      state.status = "success";
      state.role = action.payload.user.role;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.errorMessage = action.payload.Message;
      state.status = "failed";
      state.role = "";
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearState } = loginSlice.actions;

// export all reducers as single reducer object
export default loginSlice.reducer;
