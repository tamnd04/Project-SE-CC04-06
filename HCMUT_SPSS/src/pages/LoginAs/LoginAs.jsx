import React from "react";
import { Link } from "react-router-dom";
import SidebarHomepage from "../../components/SidebarHomepage/SidebarHomepage";
import "./LoginAs.css"; // Assuming this file contains your styles

const LoginAs = () => {
  return (
    <>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarHomepage />
        {/* Main Content Section */}
        <div
          style={{
            width: "calc(100% - 360px)", // Adjust width to account for the wider blue column
            height: "100%",
            fontSize: "0px",
            backgroundColor: "#ffffff",
            position: "absolute",
            top: "0",
            left: "420px", // Shift the content right
            zIndex: "5",
          }}
        >
          <span
            style={{
              display: "flex",
              width: "597px",
              height: "16px",
              justifyContent: "center",
              alignItems: "flex-start",
              fontFamily: "Arial, var(--default-font-family)",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "16px",
              color: "#030391",
              letterSpacing: "0.5px",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              zIndex: "6",
              margin: "322px 0 0 150px",
            }}
          >
            ĐĂNG NHẬP VỚI TƯ CÁCH LÀ
          </span>

          {/* Sinh viên Button with Link */}
          <Link to="/loginstu">
            <button
              className="login-button"
              style={{
                display: "flex",
                width: "500px",
                height: "56px",
                padding: "20px 80px",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                borderRadius: "8px",
                border: "1px solid #1488db",
                position: "relative",
                zIndex: "13",
                cursor: "pointer",
                margin: "105px 0 0 376px",
              }}
            >
              <span
                style={{
                  fontFamily: "Arial, var(--default-font-family)",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                Sinh viên
              </span>
            </button>
          </Link>

          {/* SPSO Button with Link */}
          <Link to="/loginspso">
            <button
              className="login-button"
              style={{
                display: "flex",
                width: "500px",
                height: "56px",
                padding: "20px 80px",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                borderRadius: "8px",
                border: "1px solid #1488db",
                position: "relative",
                zIndex: "15",
                cursor: "pointer",
                margin: "26px 0 0 376px",
              }}
            >
              <span
                style={{
                  fontFamily: "Arial, var(--default-font-family)",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                SPSO
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginAs;
