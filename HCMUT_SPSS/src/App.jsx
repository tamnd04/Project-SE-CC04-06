import React from "react";
import PrintinglogofStudentSPSO from "./pages/PrintinglogofStudentSPSO/PrintinglogofStudentSPSO";
import SPSORules from "./pages/SPSORules/SPSORules";
import Printhistory from "./pages/Printhistory/Printhistory";
import LoginAS from "./pages/LoginAs/LoginAs";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import StudentHomepage from "./pages/StudentHomepage/student_homepage";
import PrinterManagement from "./pages/PrinterManagement/PrinterManagement";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loginas" element={<LoginAS />} />
          <Route path="/login" element={<Login />} />
          {/* Student route */}
          <Route
            path="/student_homepage"
            element={
              <PrivateRoute currrole="student">
                <StudentHomepage />
              </PrivateRoute>
            }
          />
          <Route
            path="/logStudent"
            element={
              <PrivateRoute currrole="student">
                <Printhistory />
              </PrivateRoute>
            }
          />

          {/* SPSO route */}
          <Route
            path="/SPSOrules"
            element={
              <PrivateRoute currrole="spso">
                <SPSORules />
              </PrivateRoute>
            }
          />
          <Route
            path="/logSPSO"
            element={
              <PrivateRoute currrole="spso">
                <PrintinglogofStudentSPSO />
              </PrivateRoute>
            }
          />
          <Route
            path="/printermanagement"
            element={
              <PrivateRoute currrole="spso">
                <PrinterManagement />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
