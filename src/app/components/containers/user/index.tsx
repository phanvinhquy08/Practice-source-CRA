import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserList } from "../../../../usecase/user";

const User: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  return <div>User</div>;
};

export default User;
