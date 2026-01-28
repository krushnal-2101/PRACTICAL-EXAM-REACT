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
    <div className="container p-5 mt-3" style={{backgroundColor:" rgb(35, 66, 56)"}}>
      <input
        className="form-control mt-5 "
        placeholder="Room ID"
        onChange={e => setRoomId(e.target.value)}
      />
      <button className="btn btn-success mt-3" onClick={submit}>
        Reserve
      </button>
    </div>
  );
}
