import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RootState } from "..";

import { Passenger } from "../../repositories/passenger";

interface State {
  data: Passenger[];
  loading: boolean;
  error: Error | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const { reducer, actions } = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    setLoading: (state: State, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateData: (state: State, action: PayloadAction<Passenger[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    setError: (state: State, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = new Error(action.payload);
    },
  },
});

const passengerDetailSelector = createSelector(
  (state: RootState) => state.domain.user,
  (state: RootState, id: number) => id,
  (user, id) => user.data.find((x) => x.id === id)
);

export { reducer };
export default actions;
export { passengerDetailSelector };
