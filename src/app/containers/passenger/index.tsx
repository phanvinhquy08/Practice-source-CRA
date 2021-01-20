import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Passenger from "../../components/pages/passenger";
import { fetchResource } from "../../../usecase/passenger";
import passengerAction from "../../../reducers/domain/passenger";

const PassengerContainer: React.FC = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const { page }: { page?: number } = qs.parse(location.search, {
  //   parseNumbers: true,
  // });

  // const pageNumber = typeof page === "string" ? parseInt(page) : undefined;

  useEffect(() => {
    dispatch(passengerAction.setInitLoading(true));
    dispatch(fetchResource({ page: 0, size: 2 }));
    return () => {
      dispatch(passengerAction.updateData([]));
    };
  }, []);

  const containerProps = {};

  return <Passenger {...containerProps} />;
};

export default PassengerContainer;
