import React, { useState } from "react";
import SidebarSPSO from "../../components/SidebarSPSO/SidebarSPSO";
import "./spso_homepage.css";

const SPSOHomepage = () => {
  const stuhomePageMenuStyles = {
    button: {
      '&[data-home="true"]': {
        borderColor: "white",
        "&:hover": {
          borderColor: "#b0b0b0",
        },
      },
    },
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarSPSO menuStyles={stuhomePageMenuStyles} />
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#ffffff",
            border: "1px solid #000000",
            position: "relative",
            overflow: "hidden",
            margin: "0 auto",
          }}
          className="main-container"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center all components horizontally
              justifyContent: "flex-start", // Align components towards the top
              padding: "100px 0px", // Adjust padding to create space
              position: "relative",
              top: "120px", // Position it down as needed
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#030391",
                fontFamily: "Arial, var(--default-font-family)",
                alignSelf: "flex-start", // Align heading separately
                marginLeft: "100px", // Move it to the right
              }}
            >
              TRANG CHỦ
            </h2>
            <div
              style={{
                width: "614px",
                height: "321px",
                fontSize: "0px",
                position: "relative",
                zIndex: "26",
                margin: "px 0 0 0",
                left: "500px",
                top: "10px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: "308px",
                  height: "34px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Arial, var(--default-font-family)",
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "34px",
                  color: "#373a40",
                  position: "relative",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  zIndex: "23",
                  margin: "45px 0 0 0",
                  right: "420px",
                }}
              >
                Chào mừng trở lại, Phạm Xuân B.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "20px",
                }}
              >
                {/* First Box */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "450px", // Adjusted width
                    height: "60px", // Adjusted height
                    border: "1px solid #1488db",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    fontSize: "25px",
                    fontFamily: "Arial, var(--default-font-family)",
                    fontWeight: "400",
                    color: "#373a40",
                    paddingLeft: "7px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added drop shadow
                    marginTop: "100px", // Move it down a bit
                  }}
                >
                  Tổng số tài liệu đã in trong tuần: 1234
                </div>

                {/* Second Box */}
                <a href="/reportSPSO" style={{ textDecoration: "none" }}>
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      width: "450px",
                      height: "60px",
                      border: "1px solid #1488db",
                      borderRadius: "8px",
                      backgroundColor: isHovered ? "#1488db" : "white",
                      fontSize: "25px",
                      fontFamily: "Arial, var(--default-font-family)",
                      fontWeight: "400",
                      color: isHovered ? "white" : "#373a40",
                      paddingLeft: "7px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a drop shadow
                      cursor: "pointer", // Makes the box look clickable
                      transition: "all 0.3s ease", // Smooth transition effect
                    }}
                  >
                    Xem báo cáo hệ thống
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SPSOHomepage;
