import React from "react";
import "./LandingPage.css";
import landing from '../Images/landingbg.jpg'
import k from '../Images/k.png'
import { Link, Navigate, useNavigate } from "react-router-dom";

function LandingPage(props) {
  let navigate = useNavigate();

  const buttonClick = () => {
    navigate("/Registration");
  };
  return (
    <>
    
    <header>
      <nav class="navbar  border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={k} width="30" height="24" class="d-inline-block align-text-top m-1  "/>
      Kaleidipin
    </a>
  </div>
</nav>
    </header>
    <div class="card text p-1">
  <img src={landing} class="card-img" alt="..."/>
  <div class="image-card card-img-overlay text-center ">
    <h1 class="card-title text display-1 m-2">Kaleidipin</h1>
    <p class="card-text ">-an AstroGazer</p>
    <p class="card-text "><small>Explore the space within your Hands.</small></p>
    <button onClick={buttonClick} type="button" class="btn btn-lg btn-outline-primary mt-5">Explore</button>
  </div>
</div>
</>
  );
}

export default LandingPage;
