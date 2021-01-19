import Api from "../api";
import { config } from "../../config/axiosConfig";
import { RequestParams } from "../../interfaces/requestParams";

const apiUrl = "/api/users";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type UserListResponse = {
  data: User[];
};

type UserDetailResponse = {
  data: User;
};

interface UserRequestParams extends RequestParams {
}

export default class UserRepository extends Api {
  public getList(params?: UserRequestParams) {
    return this.get<UserListResponse>(apiUrl, { params });
  }

  public getDetail(id: number, params?: UserRequestParams) {
    return this.get<UserDetailResponse>(`${apiUrl}/${id}`, { params });
  }
}

export const userRepository = new UserRepository(config);
