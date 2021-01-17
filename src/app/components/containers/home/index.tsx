import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserList } from "../../../../usecase/user";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  return <div>Home</div>;
};

export default Home;
