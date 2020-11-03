import { combineReducers } from "redux";
import userSliceReducer from "./user/reducer";
import resourcesSliceReducer from "./resources/reducer";
import developersSliceReducer from "./developers/reducer";

const rootReducer = combineReducers({
  user: userSliceReducer,
  resources: resourcesSliceReducer,
  developers: developersSliceReducer,
});

export default rootReducer;