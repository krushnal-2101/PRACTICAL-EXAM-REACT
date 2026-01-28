import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/actions";

function RoomList() {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.list);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="container p-4 mt-5"  style={{backgroundColor:" rgb(35, 66, 56)"}}>
      <h3 style={{color:"white"}}>Rooms</h3>
      {rooms.map(r => (
        <div key={r.id} className="card p-2 mb-2">
          {r.type} | ₹{r.pricePerNight} | {r.status === "available" ? "Available" : "Booked"}
        </div>
      ))}
    </div>
  );
}

export default RoomList;