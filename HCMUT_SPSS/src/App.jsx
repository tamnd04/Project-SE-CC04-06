import { React, useEffect } from "react";
import PrintinglogofStudentSPSO from "./pages/PrintinglogofStudentSPSO/PrintinglogofStudentSPSO";
import SPSORules from "./pages/SPSORules/SPSORules";
import Printhistory from "./pages/Printhistory/Printhistory";
import LoginAS from "./pages/LoginAs/LoginAs";
import LoginStudent from "./pages/Login/LoginStudent";
import LoginSPSO from "./pages/Login/LoginSPSO";
import Homepage from "./pages/Homepage/Homepage";
import StudentHomepage from "./pages/StudentHomepage/student_homepage";
import Chooseprinter from "./pages/Chooseprinter/Chooseprinter";
import PrintingProperties from "./pages/PrintingProperties/PrintingProperties";
import StartprintingPage from "./pages/Startprinting/Startprinting";
import SPSOHomepage from "./pages/SPSOHomepage/spso_homepage";
import PrinterManagement from "./pages/PrinterManagement/PrinterManagement";
import BuyPages from "./pages/Buyprintingpages/Buyprintingpages";
import SPSOReport from "./pages/SPSOReport/SPSOReport";
import UploadDoc from "./pages/UploadDoc/UploadDoc";

import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    // Clear localStorage on project startup
    localStorage.clear();
    console.log("localStorage cleared");
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loginas" element={<LoginAS />} />
          <Route path="/loginstu" element={<LoginStudent />} />
          <Route path="/loginspso" element={<LoginSPSO />} />
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
            path="/newprint"
            element={
              <PrivateRoute currrole="student">
                <UploadDoc />
              </PrivateRoute>
            }
          />
          <Route
            path="/chooseprinter"
            element={
              <PrivateRoute currrole="student">
                <Chooseprinter />
              </PrivateRoute>
            }
          />
          <Route
            path="/printproperties"
            element={
              <PrivateRoute currrole="student">
                <PrintingProperties />
              </PrivateRoute>
            }
          />
          <Route
            path="/startprint"
            element={
              <PrivateRoute currrole="student">
                <StartprintingPage />
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
          <Route
            path="/buypages"
            element={
              <PrivateRoute currrole="student">
                <BuyPages />
              </PrivateRoute>
            }
          />

          {/* SPSO route */}
          <Route
            path="/spso_homepage"
            element={
              <PrivateRoute currrole="spso">
                <SPSOHomepage />
              </PrivateRoute>
            }
          />
          <Route
            path="/SPSOrules"
            element={
              <PrivateRoute currrole="spso">
                <SPSORules />
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
          <Route
            path="/logSPSO"
            element={
              <PrivateRoute currrole="spso">
                <PrintinglogofStudentSPSO />
              </PrivateRoute>
            }
          />
          <Route
            path="/reportSPSO"
            element={
              <PrivateRoute currrole="spso">
                <SPSOReport />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
