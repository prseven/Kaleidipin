import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import k from "../Images/k.png";
import Footer from "../Footer/Footer";

function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

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
          sessionStorage.setItem("token","Bearer " + response.data.token);
          sessionStorage.setItem("email", formData.email);
          // document.cookie = "Bearer Token" + "=" + response.data.token;
        });
      console.log(formData);
      setLogin(true);
      alert("LoggedIn Successfully!!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response.data);
      console.log(error.response.data.message);
      alert("Error while Logging in", error);
    };
  }
  return (
    <>
      <nav class="navbar  navbar-expand-lg bg-body-tertiary ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <div class="container-fluid">
                <a class="navbar-brand text-info">
                  <img
                    src={k}
                    alt="Logo"
                    width="30"
                    height="24"
                    class="d-inline-block align-text-top"
                  />
                  Kaleidipin
                </a>
              </div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item text-info fw-3">
                  {/* <a class="btn btn-outline-info" aria-current="page" href="/register">Register                    
                  </a> */}
                  <Link to="/register" class="btn btn-outline-info" aria-current="page">Register</Link>
                </li>
                <li class="nav-item active ">
                <button className="btn btn-outline-danger"><Link to='/landing'>Logout</Link></button>
              </li>                
              </ul>
            </div>
          </div>
        </nav>
      <section className="register-div ">
      <div className="register-text">
        <div className="register-card">
          <div className="card-control">
          <h1 className="text-primary">SignIn</h1>
          
            <form onSubmit={handleSubmit}>
            <div className="register-control fw-bold">
                <input
                  type="email"
                  name="email"
                  placeholder="username"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="register-control fw-bold">
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
              
              </div>
             
            </form>
          </div>
          </div>
        </div>
      
      </section>
      <Footer/>
    </>
  );
}

export default Login;
