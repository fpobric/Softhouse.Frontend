import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import login from "./login";
import comments from "./comments";

const makeStore = () =>
  configureStore({
    reducer: {
      comments,
      login,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
