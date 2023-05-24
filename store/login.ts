import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../requests";
import CommentDto from "../interfaces/dto/CommentDto";
import { Session } from "next-auth";

let initialState: {
  data: {};
  status: any;
} = {
  data: {},
  status: "",
};

export const setGoogleToken = createAsyncThunk(
  "token/post",
  async (token: string) => {
    const uri = `auth/validate`;
    const res = await requests.createPostAxiosRequest(uri, null, {
      Authorization: `Bearer ${token}`,
    });
    return res.data;
  }
);

const googleTokenSlice = createSlice({
  name: "google-token",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setGoogleToken.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
  },
});

export default googleTokenSlice.reducer;
