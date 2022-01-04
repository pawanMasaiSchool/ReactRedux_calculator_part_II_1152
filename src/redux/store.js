import { myReducer } from "./reducer";

import { createStore } from "redux";

const initialState = {
  myCount: 0
};

export const myStore = createStore(myReducer, initialState);
