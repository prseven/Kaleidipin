import React, { useEffect, useState } from "react";
import k from "../Images/k.png";
import axios from "axios";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import './Dashboard.css';
import { Link } from "react-router-dom";
function Dashboard() {
  const [data, setData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const url = "http://localhost:8096/api/ap/apod";
  const email = sessionStorage.getItem("email");
  

  const navigate = useNavigate();

  const [apod, setApod] = useState({
    title: "",
    copyright: "",
    explanation: "",
    date: "",
    hdUrl: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const handleSubmit = async () => {
      await axios.get(url, token).then((response) => {
        console.log(response);
        setData(response.data);
        setApod(response.data);
        console.log(setApod);
      });
    };
    handleSubmit();
  }, []);

  const handleClick = () => {
    navigate("/date");
  };

  {
    /** Favourite Service Configs */
  }
  const fav = "http://localhost:8090/api/fav";

  const addtofav = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${fav}/apod/save?email=${email}`,
        apod,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log("Fav Data", response.data);
      setApod(response.data);
      alert("Added to favourites");
    } catch (error) {
      console.error(error);
      alert(error.response.data);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-cmp">
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item text-info">
                {/* <a class="nav-link " aria-current="page" href="/fav"> */}
                <Link to="/fav" class="nav-link " aria-current="page" >Favorites</Link>
              </li>
              <li className="nav-item">
                <form class="d-flex" role="search">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Search
                    </a>
                    <ul class="dropdown-menu hover">
                      <li>
                        <a class="dropdown-item fw-6" onClick={handleClick}>
                          By Date
                        </a>
                      </li>
                    </ul>
                  </li>
                  <button
                    class="btn btn-outline-danger"
                    type="submit"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-5">
        <div className="dashboard">
          <div class=" row g-0">
            <h2 className="text-center">APOD : {data.date}</h2>
            <div class="col-md-4">
              <img src={data.hdurl} class=" dash-img img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class=" card-body-w">
                <h5 class="card-title m-4 f-8">{data.title}</h5>
                <h3 class="card-title m-4">{data.copyright}</h3>
                <p class="card-text m-4 ">{data.explanation}</p>
                <p class="card-text m-4"></p>
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={addtofav}
                >              
                  Add to Fav
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
