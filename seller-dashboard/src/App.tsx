import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import OpinionsPage from "./pages/OpinionsPage";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/opinions" element={<OpinionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
