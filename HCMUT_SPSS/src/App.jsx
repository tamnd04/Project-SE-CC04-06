import React from "react";
import PrintinglogofStudentSPSO from "./pages/PrintinglogofStudentSPSO/PrintinglogofStudentSPSO";
import SPSORules from "./pages/SPSORules/SPSORules";
import Printhistory from "./pages/Printhistory/Printhistory";
import LoginAS from "./pages/LoginAs/LoginAs";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginAS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rules" element={<SPSORules />} />
          <Route path="/log" element={<Printhistory />} />
          <Route path="/logSPSO" element={<PrintinglogofStudentSPSO />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
