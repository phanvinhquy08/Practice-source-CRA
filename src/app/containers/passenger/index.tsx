import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Passenger from "../../components/pages/passenger";
import { fetchResource } from "../../../usecase/passenger";

const PassengerContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResource({ page: 0, size: 10 }));
  }, []);

  const containerProps = {};

  return <Passenger {...containerProps} />;
};

export default PassengerContainer;
