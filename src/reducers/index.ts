import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  AnyAction,
} from "@reduxjs/toolkit";

import domain from "./domain";

const rootReducer = combineReducers({
  domain,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;
export type Action<R = any> = ThunkAction<
  Promise<R>,
  RootState,
  null,
  AnyAction
>;
