import React from "react";
import "./LandingPage.css";
import landing from "../Images/pexels-wendy-wei-2753453.jpg";
import k from "../Images/k.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../Footer/Footer";


function LandingPage(props) {
  let navigate = useNavigate();

  const buttonClick = () => {
    navigate("/register");
  };
  return (
    <>
      {/* <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand text-info" href="#">
          <img
            src={k}
            width="30"
            height="30"
            class="d-inline-block align-top"
          />
          Kaledipin
        </a>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav  mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link text-info" href="#Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-info" href="#About">
                  About
                </a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link text-info" href="/login">
                  SignIn
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-info" href="/register">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </nav> */}
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
              <ul class="navbar-nav  mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                {/* <a class="nav-link text-info" href="#Home"> */}
                <Link to='/' class="nav-link text-info" >Home</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link text-info" href="/login"> */}
                <Link to='/login' class="nav-link text-info" >SignIn</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link text-info" href="/register"> */}
                <Link to='/register' class="nav-link text-info">Register</Link>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      <section id="Home">
        <div class="card bg-dark  text-white">
          <img class="card-img bg-transaprent" src={landing} alt="Card image" />
          <div class="card-img-overlay m-5">
            <h1 class="card-title display-1">KALEIDIPIN</h1>
            <p class="card-text text-left fs-4 fw-bold">
              EXPLORE THE CELESTIAL OBJECTS<br/>WITHIN YOU HANDS
            </p>
            <p class="card-text fs-4">
              Astronomical Information<br/>
              About The Universe
            </p>            
          </div>
        </div>
      </section>
      <section id="About">
      </section>
      <Footer/>
    </>
  );
}

export default LandingPage;
