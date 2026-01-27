import axios from "axios";

export const fetchRooms = () => async dispatch => {
  dispatch({ type: "ROOMS_LOADING" });
  const res = await axios.get("http://localhost:3001/rooms");
  dispatch({ type: "ROOMS_SUCCESS", payload: res.data });
};

export const fetchReservations = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/reservations");
  dispatch({ type: "RES_SUCCESS", payload: res.data });
};

export const addReservation = data => async dispatch => {
  await axios.post("http://localhost:3001/reservations", data);
  dispatch(fetchReservations());
};
