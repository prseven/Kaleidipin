import React, { useEffect, useState } from "react";
import k from "../Images/k.png";
import { useNavigate,  } from "react-router";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import './Fav.css';
import Footer from "../Footer/Footer";

function Fav() {
  const navigate = useNavigate();

  const email = sessionStorage.getItem("email");

  const [fav, setFav] = useState([]);
  const [nullArray, setNullArray] = useState(false);

  const url = "http://localhost:8090/api/fav";

  const [apod, setApod] = useState({});

  useEffect(() => {
    const viewFav = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios
          .get(`${url}/Apods?email=${email}`, {
            headers: {
              authorization: token,
            },
          })
          .then((response) => {
            console.log(response);
            console.log(response.data);
            setFav(response.data);
            if (response.data == "No Favourites at this Time!!") {
              setNullArray(true);
              console.log(nullArray);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    viewFav();
    /** Add fav in the array if somethings wrong */
  }, [fav]);

  const delById = async (apodId) => {
    let result = window.confirm("Are you sure to delete this APOD");
    try {
      if (result === true) {
        const token = sessionStorage.getItem("token");
        console.log(token);
        console.log(apodId);
        const response = await axios.delete(
          // "http://localhost:8090/api/fav/delete/apod/"+apodId,
          `${url}/delete/apod/${apodId}`,

          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log(response.data);
        alert("Deleted Successfully!");
        // setFav(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clearWishList = () => {
    let result = window.confirm("Are you sure to delete all items?");
    try {
      if (result === true) {
        const token = sessionStorage.getItem("token");
        axios.post(`${url}/delete/apods?email=${email}`, {
          headers: { authorization: token },
        });
      }
      alert("Wishlist Cleared");
      navigate("/dashboard");
      
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
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
            <li class="nav-item text-info">
                {/* <a class="nav-link " aria-current="page" href="/dashboard"> */}
                <Link to="/dashboard" class="nav-link " aria-current="page">Dashboard</Link>
              </li>
              <li className="nav-item"> 
                <button
                  class="btn btn-outline-danger"
                  type="submit"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {/* Page Content */}
        <div>
          <div class="cards row row-cols-1 row-cols-md-3 g-4">
            {nullArray ? (
              <div>
                <h1 className="no-fav">
                  No Favourites at this time
                </h1>
              </div>
            ) : (
              fav.map((favs) => (
                    <div class="card h-100" style={{ width: '18rem' }}>
                      <img src={favs.hdurl} class="card-img-top" alt=" " />
                      <div class="card-body">
                        <h5 class="card-title">{favs.title}</h5>
                        <h5 class="card-title">{favs.copyright}</h5>
                        <p class="card-text">{favs.explanation}</p>
                        <button
                          onClick={() => delById(favs.apodId)}
                          className="btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </div>
                    {/* </div> */}
                  {/* // </div> */}
                </div>
              ))
            )}
          </div>
          {/* <button
            class="btn btn-outline-danger"
            type="submit"
            onClick={clearWishList}
          >
            Clear Wishlist
          </button> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Fav;
