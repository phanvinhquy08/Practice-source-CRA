import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import { userDetailSelector } from "./reducers/domain/user";

import { getUserList } from "./usecase/user";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch]);

    const user = useSelector((state: RootState) =>
        userDetailSelector(state, 2, "asdf")
    );
    console.log(user);
    return <div className='App'></div>;
}

export default App;
