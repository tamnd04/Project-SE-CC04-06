import React, { useState, useEffect } from "react";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";
import "./student_homepage.css";

const StudentHomepage = () => {
  const [remainingPages, setRemainingPages] = useState(0);

  // Load remaining pages from localStorage and keep it updated
  useEffect(() => {
    const loadRemainingPages = () => {
      const storedPages = localStorage.getItem("remainingPages");
      if (storedPages) {
        setRemainingPages(parseInt(storedPages));
      }
    };

    // Load initial value
    loadRemainingPages();

    // Set up event listener for storage changes
    window.addEventListener("storage", loadRemainingPages);

    // Cleanup
    return () => {
      window.removeEventListener("storage", loadRemainingPages);
    };
  }, []);

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

  return (
    <>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarStudent menuStyles={stuhomePageMenuStyles} />
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
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "100px 0px",
              position: "relative",
              top: "120px",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#030391",
                fontFamily: "Arial, var(--default-font-family)",
                alignSelf: "flex-start",
                marginLeft: "100px",
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
                Chào mừng trở lại, Nguyễn Văn A.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "350px",
                    height: "60px",
                    border: "1px solid #1488db",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    fontSize: "25px",
                    fontFamily: "Arial, var(--default-font-family)",
                    fontWeight: "400",
                    color: "#373a40",
                    paddingLeft: "7px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    marginTop: "100px",
                  }}
                >
                  Số tài liệu đã in trong tuần: 2
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "350px",
                    height: "60px",
                    border: "1px solid #1488db",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    fontSize: "25px",
                    fontFamily: "Arial, var(--default-font-family)",
                    fontWeight: "400",
                    color: "#373a40",
                    paddingLeft: "7px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Số giấy còn lại: {remainingPages}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHomepage;
