import { useNavigate } from "react-router-dom";

const OpinionsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>OrdersPage</h1>
      <button onClick={() => navigate("/")}>Back to main</button>
    </div>
  );
};

export default OpinionsPage;
