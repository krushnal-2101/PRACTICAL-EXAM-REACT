import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, cancelReservation } from "../redux/actions";

export default function ReservationList() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.reservations.list);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="container mt-5 p-3"   style={{backgroundColor:" rgb(35, 66, 56)"}}>
      <h3 style={{color:"white"}}>Reservations</h3>
      {list.map(r => (
        <div key={r.id} className="card p-3"  style={{backgroundColor:" rgb(35, 66, 56)", color:"white", fontSize:"18px", fontWeight:"bold"}}>
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

