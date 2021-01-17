import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RootState } from "..";

import { User } from "../../repositories/user";

interface State {
  data: User[];
  loading: boolean;
  error: Error | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const { reducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state: State, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateData: (state: State, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    setError: (state: State, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = new Error(action.payload);
    },
  },
});

const userDetailSelector = createSelector(
  (state: RootState) => state.domain.user,
  (state: RootState, id: number) => id,
  (state: RootState, id: number, name: string) => name,
  (user, id, name) => user.data.find((x) => x.id === id)
);

export { reducer };
export default actions;
export { userDetailSelector };
