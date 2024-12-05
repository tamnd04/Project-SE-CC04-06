import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "student" && password === "student") {
      window.location.href = "student_homepage.html";
    } else if (username === "spso" && password === "spso") {
      window.location.href = "spso_homepage.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="log-in-spso">
      <div className="rectangle-1" />
      <div className="group-4">
        <div className="hcmut-ssps">
          HCMUT
          <br />
          SSPS
        </div>
      </div>
      <img
        className="_01-logobachkhoatoi-1"
        src="images/logobk.png"
        alt="logo"
      />
      <div className="rectangle-3" />
      <div className="t-n-ng-nh-p-v-m-t-kh-u">TÊN ĐĂNG NHẬP VÀ MẬT KHẨU</div>
      <div className="trang-chu">
        <img className="vector" src="images/home.svg" alt="home" />
        <div className="trang-ch2">Trang chủ</div>
      </div>
      <div className="khac">
        <img className="vector2" src="images/3dot.svg" alt="menu" />
        <div className="khac2">Khác</div>
      </div>
      <div className="m-t-kh-u">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field-2"
          placeholder="Điền mật khẩu"
        />
      </div>
      <div className="t-n-ng-nh-p">Tên đăng nhập:</div>
      <div className="m-t-kh-u2">Mật khẩu:</div>
      <div className="quen-mat-khau">
        <div className="quen-mat-khau2">Quên mật khẩu</div>
      </div>
      <div className="login-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
          placeholder="Điền tên đăng nhập"
        />
      </div>
      <button className="ng-nh-p" onClick={handleLogin}>
        <img
          className="login-24-outline"
          src="images/login-24-outline0.svg"
          alt="login"
        />
        <div className="ng-nh-p2">Đăng nhập</div>
      </button>
    </div>
  );
}
