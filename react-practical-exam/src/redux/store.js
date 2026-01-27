import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; 
import roomReducer from "./roomReducer";
import reservationReducer from "./reservationReducers";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  auth: authReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  
);
