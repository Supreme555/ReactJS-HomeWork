import { combineReducers } from "redux";
import RegistrationReducer from "./reducers/RegistrationReducer";
import LoginReducer from "./reducers/LoginReducer";
const rootReducer = combineReducers({
  registration: RegistrationReducer,
  login: LoginReducer,
});

export default rootReducer;
