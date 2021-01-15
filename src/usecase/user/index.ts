import { userRepository } from "../../repositories/user";
import { Action } from "../../reducers/index";
import userActions from "../../reducers/domain/user";

export const getUserList = (): Action => async (dispatch) => {
    try {
        dispatch(userActions.setloading(true));
        const res = await userRepository.getList({ delay: 3, page: 1 });
        const { data } = res.data;
        dispatch(userActions.updateData(data));
        dispatch(userActions.setloading(false));
    } catch (error) {
        dispatch(userActions.setError(error.message));
    }
};
