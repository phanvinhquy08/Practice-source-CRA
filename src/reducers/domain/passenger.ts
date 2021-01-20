import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RootState } from "..";
import _ from "lodash";

import { Passenger } from "../../repositories/passenger";

export type PassengerWithLoadMore = Passenger & { loading?: boolean };

interface State {
  data: PassengerWithLoadMore[];
  initLoading: boolean;
}

const initialState: State = {
  data: [],
  initLoading: true,
};

const { reducer, actions } = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    updateData: (
      state: State,
      action: PayloadAction<PassengerWithLoadMore[]>
    ) => {
      if (_.isEmpty(action.payload)) {
        state.data = action.payload;
        return;
      }
      state.data = _.concat(state.data, action.payload);
    },
    setInitLoading: (state: State, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    filterData: (state: State) => {
      state.data = _.filter(state.data, (x) => !x.loading);
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
