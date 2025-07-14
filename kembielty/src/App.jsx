import React from "react";
import "./App.css";
import HomePage from "./Front/pages/HomePage";
import {  Routes, Route, useNavigate } from "react-router-dom";
import WelcomePage from "./Front/pages/WelcomePage";
import UploadPage from "./Front/pages/UploadPage";
import HistoriquePage from "./Front/pages/HistoriquePage";
import Reclamation from "./Front/pages/Reclamation";
import Profile from "./Front/pages/Profile";
import Extrait from "./Front/pages/Extrait";
import DetailLettre from "./Front/pages/DetailLettre";
import Dashboard from "./back/pages/Dashboard";
import NotFound from "./Front/Components/NotFound";
import ForgetPassword from "./Front/pages/ForgetPassword";
import VerifyCode from "./Front/Components/VerifyCode";
import ResetPassword from "./Front/Components/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/historique" element={<HistoriquePage />} />
      <Route path="/reclamation" element={<Reclamation />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/extrait" element={<Extrait />} />
      <Route path="/detail" element={<DetailLettre />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      <Route path="*" element={<NotFound/>} />

    </Routes>
  );
}


export default App;
