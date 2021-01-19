import { combineReducers } from "@reduxjs/toolkit";

import { reducer as user } from "./user";
import { reducer as passenger } from './passenger'

export default combineReducers({
    user, passenger
});
