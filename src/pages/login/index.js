import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="register-container">
        <div className="register">
          <div className="form sign-up">
            <h2>Đăng Nhập</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <i className="bi bi-person-fill"></i>
              <span>Tên Đăng Nhập*</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <i className="bi bi-key-fill"></i>
              <span>Nhập Mật Khẩu*</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Đăng Nhập" />
            </div>
            <p>
              Bạn Chưa có tài khoản thành viên ?{" "}
              <Link to="/register" className="login">
                Đăng Ký
              </Link>
            </p>
          </div>
          <div className="form sign-in"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
