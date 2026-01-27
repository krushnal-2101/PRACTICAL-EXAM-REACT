import axios from "axios";
const API = "http://localhost:5001";

export const fetchRooms = () => async dispatch => {
  dispatch({ type: "ROOMS_LOADING" });
  const res = await axios.get(`${API}/rooms`);
  dispatch({ type: "ROOMS_SUCCESS", payload: res.data });
};

export const fetchReservations = () => async dispatch => {
  const res = await axios.get(`${API}/reservations`);
  dispatch({ type: "RES_SUCCESS", payload: res.data });
};

export const makeReservation = data => async dispatch => {
  await axios.post(`${API}/reservations`, data);
  dispatch(fetchReservations());
};

export const cancelReservation = id => async dispatch => {
  await axios.delete(`${API}/reservations/${id}`);
  dispatch(fetchReservations());
};
