import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/Layout/RootLayout";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import OpinionsPage from "../pages/OpinionsPage";
import OrdersPage from "../pages/OrdersPage";
import SalesQualityPage from "../pages/SalesQualityPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: "opinions", element: <OpinionsPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "salesQuality", element: <SalesQualityPage /> },
    ],
  },
]);

export default router;
