import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.get("http://localhost:3001/users");

    const user = res.data.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      dispatch({ type: "LOGIN" });
      navigate("/");
    } else {
      alert("Invalid Hotel Staff Credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "420px" }}>
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">🏨 Hotel Management Login</h3>
        <p className="text-center text-muted">
          Staff / Admin Access Only
        </p>

        <input
          className="form-control mb-3"
          placeholder="Staff Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
