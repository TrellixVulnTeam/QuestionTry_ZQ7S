import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/reducer";
import postReducer from "./post/reducer";

export const reducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

const middleware = (getDefaultMiddleware) => {
  const middlewareArray = getDefaultMiddleware();

  return middlewareArray;
};

export const store = configureStore({
  reducer,
  middleware,
});
