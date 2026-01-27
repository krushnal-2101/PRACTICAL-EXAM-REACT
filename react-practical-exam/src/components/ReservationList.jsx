import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, cancelReservation } from "../redux/actions";

export default function ReservationList() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.reservations.list);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <div className="container">
      <h3>Reservations</h3>
      {list.map(r => (
        <div key={r.id} className="card p-2 mb-2">
          Room: {r.roomId}
          <button
            className="btn btn-danger btn-sm float-end"
            onClick={() => dispatch(cancelReservation(r.id))}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}

