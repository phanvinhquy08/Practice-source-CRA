import Api from "../api";
import { config } from "../../config/axiosConfig";
import { RequestParams } from "../../interfaces/requestParams";

const apiUrl = "/passenger";

export interface Passenger {
  name: string;
  trip: number;

}

type PassengerListResponse = {
  data: Passenger[];
};

type PassengerDetailResponse = {
  data: Passenger;
};

interface PassengerRequestParams extends RequestParams {
  size?: number;
}

export default class PassengerRepository extends Api {
  public getList(params?: PassengerRequestParams) {
    return this.get<PassengerListResponse>(apiUrl, { params });
  }
}

export const passengerRepository = new PassengerRepository(config);