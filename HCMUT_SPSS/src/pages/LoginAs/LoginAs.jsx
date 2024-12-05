import React from "react";
import "./LoginAs.css";

export default function LoginAs() {
  return (
    <div className="log-in-as">
      <div className="rectangle-1" />
      <div className="group-4">
        <div className="hcmut-ssps">
          HCMUT
          <br />
          SSPS
        </div>
      </div>
      <img className="_01-logobachkhoatoi-1" src="images/logobk.png" />
      <div className="ng-nh-p-v-i-t-c-ch-l">ĐĂNG NHẬP VỚI TƯ CÁCH LÀ</div>
      <div className="trang-chu">
        <img className="vector" src="images/home.svg" />
        <div className="trang-chu2">Trang chủ</div>
      </div>
      <div className="khac">
        <img className="vector2" src="images/3dot.svg" />
        <div className="khac2">Khác</div>
      </div>
      <a href="/login">
        <div className="login1">
          <button className="sinh-vien">Sinh viên</button>
        </div>
      </a>
      <a href="/login">
        <div className="login2">
          <button className="spso">SPSO</button>
        </div>
      </a>
    </div>
  );
}
