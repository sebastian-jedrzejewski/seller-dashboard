import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import data from "../data/data";
import { autoLogin, loginUser } from "../store/redux/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    /* @ts-ignore */
    dispatch(autoLogin());
  }, []);

  const handleLogin = () => {
    if (Object.keys(data).includes(userId)) {
      /* @ts-ignore */
      dispatch(loginUser(userId));
      setError("");
      navigate("/");
    } else {
      setError("Invalid user id");
    }
  };

  if (localStorage.getItem("userId")) {
    return <Navigate to="/" />;
  }

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
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
      )}
    </div>
  );
};

export default LoginPage;
