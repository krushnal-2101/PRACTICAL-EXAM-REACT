import { useDispatch } from "react-redux";
import { makeReservation } from "../redux/actions";
import { useState } from "react";

export default function ReservationForm() {
  const [roomId, setRoomId] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(makeReservation({ roomId, status: "Confirmed" }));
  };

  return (
    <div className="container">
      <input
        className="form-control mb-2"
        placeholder="Room ID"
        onChange={e => setRoomId(e.target.value)}
      />
      <button className="btn btn-success" onClick={submit}>
        Reserve
      </button>
    </div>
  );
}
