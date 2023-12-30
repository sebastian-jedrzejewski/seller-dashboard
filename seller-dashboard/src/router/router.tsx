import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/Layout/RootLayout";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import OpinionsPage from "../pages/OpinionsPage";

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
    ],
  },
]);

export default router;
