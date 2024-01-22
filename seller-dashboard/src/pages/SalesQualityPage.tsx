import { useNavigate } from "react-router-dom";

const SalesQualityPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SalesQualityPage</h1>
      <button onClick={() => navigate("/")}>Back to main</button>
    </div>
  );
};

export default SalesQualityPage;
