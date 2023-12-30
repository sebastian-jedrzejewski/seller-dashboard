import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/redux/auth-slice";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.auth.userId);

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleOpinions = () => {
    navigate("/opinions");
  };

  return (
    <div>
      <h1>Welcome {userId}</h1>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleOpinions}>Opinions</button>

    </div>
  );
};

export default MainPage;
