import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../../../reducers";
import { PassengerWithLoadMore } from "../../../../../reducers/domain/passenger";
import { fetchResource } from "../../../../../usecase/passenger";

const useConnect = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const listPassenger = useSelector<RootState, PassengerWithLoadMore[]>(
    (state) => state.domain.passenger.data
  );

  const initLoading = useSelector<RootState, boolean>(
    (state) => state.domain.passenger.initLoading
  );

  const handleLoadMore = () => {
    dispatch(fetchResource({ page, size: 2 }));
    setPage(page + 1);
  };

  return { listPassenger, initLoading, handleLoadMore };
};

export default useConnect;
