import React, { useEffect, useState } from "react";
import k from "../Images/k.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router";
import logo from "../Images/k.png";
import "./DateSearch.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


function DateSearch(props) {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [apodData, setApodData] = useState("");

  const url = "http://localhost:8096/api/ap/apodbydate?date=";
  
  const email = sessionStorage.getItem("email");
  const token = sessionStorage.getItem("token");

  const [apod, setApod] = useState({
    title: "",  
    copyright: "",
    explanation: "",
    date: "",
    hdUrl: "",
    url:""
  });

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const handleSubmit = async () => {
      await axios.get(url, token).then((response) => {
        console.log(response);
        // setData(response.data);
        setApod(response.data);
        console.log(setApod);
      });
    };
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    const token1 = sessionStorage.getItem("token");
    
      try {
        const formattedDate = formatDate(selectedDate);
        await axios.get(`${url}${formattedDate}`).then((response) => {
          console.log(response.data);
          setApodData(response.data);
          // console.log(setApodData);
          setApod(response.data);
        });
      } catch (error) {
        console.error("Error fetching the APOD Data", error);
      }
  };
  {
    /** Favourites Service Configs */
  }
  const fav = "http://localhost:8090/api/fav";
 

  const addtofav = async () => {
    try {
      const tokenn = sessionStorage.getItem("token");
      // const email = sessionStorage.getItem("email");
      console.log(apod);
      const response = await axios.post(
        // "http://localhost:8090/api/fav/apod/save?email="+ email,
        `${fav}/apod/save?email=${email}`,
        apod,
        {
          headers: {
            authorization: tokenn,
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
    <>
      <div>
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
                <li class="nav-item text-info fw-3">
                  {/* <a class="nav-link " aria-current="page" href="/fav">
                    Favourites
                  </a> */}
                  <Link to="/fav" className="nav-link active">Favoritos</Link>
                </li>
                <li class="nav-item text-info">
                  {/* <a class="nav-link " aria-current="page" 
                  
                  
                  href="/dashboard">
                    Dashboard
                  </a> */}
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className="nav-item ">
                  <form class="d-flex" role="search">
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
      </div>
      <div className="apod-main">
        <div className="text-center m-5">
          <h2>Select Date:</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Get APOD
          </button>
        </div>

        {/* <section className="apod-div p-5"> */}
        <div className="card mb-3">
          {apodData ? 
          (
            <div class=" row g-0">
              <div class="col-md-4">
                <img src={apodData.hdurl} class="img-fluid rounded-start" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title m-4 ">{apodData.date}</h5>
                  <h5 class="card-title m-4 display-6">{apodData.title}</h5>
                  <h3 class="card-title m-4">{apodData.copyright}</h3>
                  <p class="card-text m-4 ">{apodData.explanation}</p>
                  {/* <p class="card-text m-4 ">{apodData.url}</p> */}
                 
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
          ) 
          : (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
          )}
        </div>
        {/* </section> */}
      </div>
      <Footer />
    </>
  );
}

export default DateSearch;
