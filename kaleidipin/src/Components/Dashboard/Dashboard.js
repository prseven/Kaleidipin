import React, { useEffect, useState } from "react";
import k from "../Images/k.png";
import test2 from "../Images/test2.jpg";
import axios from "axios";

function Dashboard(props) {
  const [data, setData] = useState({});
  const url = "http://localhost:8096/api/ap/apod";

  useEffect(()=> {
    const handleSubmit = async () => {
      await axios.get(url).then((response) => {
        console.log(response);
        setData(response.data);
      });
    };
  handleSubmit();
  },[])
  

  return (
    <div className="dashboard-cmp">
      <header className="navbar br-dark bg-body-tertiary">
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
                <a class="navbar-brand">
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
                <li class="nav-item text-dark">
                  <a class="nav-link " aria-current="page" href="#">
                    Favourites
                  </a>
                </li>
                <li class="nav-item text-dark">
                  <a class="nav-link " aria-current="page" href="#">
                    Profile
                  </a>
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
                          <a class="dropdown-item " href="/ByDate">
                            By Date
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item " href="#">
                            By Custom Date
                          </a>
                        </li>
                      </ul>
                    </li>
                    <button
                      class="btn btn-outline-danger"
                      type="submit"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="p-5">
        <div>
          <div class=" dashboard row g-0">
            <h2 className="text-center">APOD : {data.date}</h2>
            <div class="col-md-4">
              <img src={data.hdurl} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title m-4">{data.title}</h5>
                <h3 class="card-title m-4">{data.copyright}</h3>
                <p class="card-text m-4 ">{data.explanation}</p>
                <p class="card-text m-4 ">{data.hdurl}</p>
                <p class="card-text m-4"></p>
                <p class="card-text m-4">
                  <small class="text-body-secondary"></small>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
