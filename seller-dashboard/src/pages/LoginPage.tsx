import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/redux/auth-slice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleLogin = () => {
    if (userId === "user1" || userId === "user2") {
      dispatch(login(userId));
      navigate("/");
    } else {
      alert("Invalid user id");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>LoginPage</h1>
      <input
        type="text"
        placeholder="User id"
        style={{
          width: "400px",
          borderWidth: "3px",
          paddingLeft: "10px",
          marginBottom: "10px",
        }}
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
};

export default LoginPage;
