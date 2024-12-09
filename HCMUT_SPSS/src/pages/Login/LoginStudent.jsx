import React, { useState } from "react";
import SidebarHomepage from "../../components/SidebarHomepage/SidebarHomepage";
import { useNavigate } from "react-router-dom";
import { Img } from "../../components/components";

const LoginStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "2252734" && password === "1234") {
      // Store the authentication flag in localStorage/sessionStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", "student");
      navigate("/student_homepage");
    } else if (username === "2252345" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", "student");
      navigate("/student_homepage");
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarHomepage />
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
        >
          {/* Form Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center all components horizontally
              justifyContent: "flex-start", // Align components towards the top
              padding: "100px 20px", // Adjust padding to create space
              position: "relative",
              top: "200px", // Position it down as needed
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#030391",
                marginBottom: "30px",
                fontFamily: "Arial, var(--default-font-family)",
                alignSelf: "flex-start", // Align heading separately
                marginLeft: "260px", // Move it to the right
              }}
            >
              TÊN ĐĂNG NHẬP VÀ MẬT KHẨU
            </h2>

            {/* Form */}
            <form
              onSubmit={handleLogin}
              style={{
                width: "100%",
                maxWidth: "500px", // Limit form width for better design
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center all form components
              }}
            >
              {/* Username Field */}
              <div style={{ marginBottom: "20px", width: "100%" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "8px",
                    fontFamily: "Arial, var(--default-font-family)",
                  }}
                >
                  Tên đăng nhập:
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Điền tên đăng nhập"
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "20px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontFamily: "Arial, var(--default-font-family)",
                  }}
                />
              </div>

              {/* Password Field */}
              <div style={{ marginBottom: "20px", width: "100%" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "8px",
                    fontFamily: "Arial, var(--default-font-family)",
                  }}
                >
                  Mật khẩu:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Điền mật khẩu"
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "20px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontFamily: "Arial, var(--default-font-family)",
                  }}
                />
              </div>

              {/* Forgot Password */}
              <div
                style={{
                  textAlign: "right",
                  marginBottom: "20px",
                  width: "100%", // Ensure same width as form fields
                }}
              >
                <a
                  href="/"
                  style={{
                    fontSize: "18px",
                    color: "#007bff",
                    textDecoration: "none",
                    fontFamily: "Arial, var(--default-font-family)",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6c757d")} // Change to grey
                  onMouseLeave={(e) => (e.target.style.color = "#007bff")} // Revert to blue
                >
                  Quên mật khẩu
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                style={{
                  width: "40%",
                  padding: "12px",
                  paddingLeft: "0.5px",
                  fontSize: "21px",
                  fontFamily: "Arial, var(--default-font-family)",
                  fontWeight: "600",
                  color: "#ffffff",
                  backgroundColor: "#1488db",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  display: "flex", // Flexbox for alignment
                  alignItems: "center", // Vertically center items
                  justifyContent: "center", // Horizontally center items
                  gap: "10px", // Space between image and text
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#006bb3")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#1488db")
                }
              >
                {
                  <Img
                    src="images/img_login_24_outline.svg"
                    alt="Home"
                    className="h-[20px] w-[22px]"
                  />
                }
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStudent;
