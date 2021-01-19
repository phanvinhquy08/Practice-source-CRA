import { passengerRepository } from "../../repositories/passenger";
import { Action } from "../../reducers/index";
import passengerAction from "../../reducers/domain/passenger";

export const getPassengerList = (): Action => async (dispatch) => {
  try {
    dispatch(passengerAction.setLoading(true));
    const res = await passengerRepository.getList({ delay: 1, page: 1 });
    const { data } = res.data;
    dispatch(passengerAction.updateData(data));
    dispatch(passengerAction.setLoading(false));
  } catch (error) {
    dispatch(passengerAction.setError(error.message));
  }
};
