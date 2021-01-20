import _ from "lodash";

import {
  passengerRepository,
  PassengerRequestParams,
} from "../../repositories/passenger";
import { Action } from "../../reducers/index";
import passengerAction from "../../reducers/domain/passenger";

export const fetchResource = (
  params?: PassengerRequestParams
): Action => async (dispatch, getStore) => {
  try {
    const fakeData = getStore()
      .domain.passenger.data.slice(0, params?.size)
      .map((x) => ({ ...x, loading: true }));

    dispatch(passengerAction.updateData(fakeData));
    const res = await passengerRepository.getList(params);
    const { data } = res.data;

    dispatch(passengerAction.filterData());
    dispatch(passengerAction.updateData(data));
    dispatch(passengerAction.setInitLoading(false));
  } catch (error) {}
};
