import { combineReducers } from "redux";

import number from "./number"
import title from "./title"
import day from "./day"

export default combineReducers({
    number,
    title,
    day
})