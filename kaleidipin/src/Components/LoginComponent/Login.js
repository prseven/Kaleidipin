import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [auth, setAuth] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8092/api/au/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          console.log(response);
          document.cookie = "Bearer Token" + "=" + response.data.token;
        });

      
      console.log(formData);
      alert("LoggedIn Successfully!!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Error while Logging in", error);
    }
  };
  return (
    <div className="login-comp">
      <div className="login-text">
        <h1>Welcome Login Here </h1>
        <div className="login-card">
          <div className="login-com"></div>
          <form onSubmit={handleSubmit}>
            <div className="login-control">
              <input
                type="email"
                name="email"
                placeholder="username"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-control">
              <input
                type="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-action">
              <button type="submit" name="button" className="login-btn">
                Login
              </button>
              {/* <Link className="btn btn-info" to="/dashboard"></Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
