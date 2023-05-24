import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../requests";
import CommentDto from "../interfaces/dto/CommentDto";

let initialState: {
  data: {};
  status: any;
} = {
  data: {},
  status: "",
};

export const getComments = createAsyncThunk("comments/get", async () => {
  const uri = `comments/all`;
  const res = await requests.createGetAxiosRequest(uri);
  return res.data;
});

export const getUpdatedComments = createAsyncThunk(
  "comments/get-updated",
  async () => {
    const uri = `comments/updated`;
    const res = await requests.createGetAxiosRequest(uri);
    return res.data;
  }
);

export const setComments = createAsyncThunk(
  "comments/set",
  async (comments: Array<CommentDto>) => {
    console.log(comments, "comment");
    const uri = `comments/create`;
    const res = await requests.createPostAxiosRequest(uri, comments);
    return res.data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getUpdatedComments.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(setComments.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
  },
});

export default commentsSlice.reducer;
