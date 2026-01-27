import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/actions";

function RoomList() {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.list);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className="container">
      <h3>Rooms</h3>
      {rooms.map(r => (
        <div key={r.id} className="card p-2 mb-2">
          {r.type} | ₹{r.price} | {r.available ? "Available" : "Booked"}
        </div>
      ))}
    </div>
  );
}

export default RoomList;