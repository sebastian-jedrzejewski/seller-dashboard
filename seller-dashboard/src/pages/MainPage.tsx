import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/redux/auth-slice";
import RankingWidget from "../components/widgets/RankingWidget";
import ChartWidget from "../components/widgets/ChartWidget";
import OrdersWidget from "../components/widgets/OrdersWidget";
import SalesQualityWidget from "../components/widgets/SalesQualityWidget";
import OpinionsWidget from "../components/widgets/OpinionsWidget";

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
      <RankingWidget />
      <ChartWidget />
      <OrdersWidget />
      <SalesQualityWidget />
      <OpinionsWidget />
    </div>
  );
};

export default MainPage;
