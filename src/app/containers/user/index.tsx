import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import User from "../../components/pages/user";
import { getUserList } from "../../../usecase/user";

const UserContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return <User />;
};

export default UserContainer;
