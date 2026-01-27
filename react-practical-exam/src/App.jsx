import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "./components/RoomsLIst";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationLIst";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RoomList/>} />
        <Route
          path="/reserve"
          element={
            // <PrivateRoute>
              <ReservationForm />
            // </PrivateRoute>
          }
        />
        <Route
          path="/reservations"
          element={
            // <PrivateRoute>  
              <ReservationList />
            // </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
