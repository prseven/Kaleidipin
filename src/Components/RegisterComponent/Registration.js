import { useState, React } from "react";
import "./Registration.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import k from "../Images/k.png";

function Registration(props) {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  );
  const navigate = useNavigate();
  // const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, username, email, password, confirmPassword } = formData;

  // const validateFormdata = (formData) => {
  //   let errors = {};

  //   if(formData.username){
  //     errors.username="Username is required.";
  //   }

  //   if(formData.email){
  //     errors.email="Email is required."
  //   }else if(!validEmail.test(formData.email)){
  //     errors.email="Invalid Email Format.";
  //   }

  //   if(!formData.password){
  //     errors.password="Password is required.";
  //   }
  //   if(formData.password !== formData.confirmPassword){
  //     errors.confirmPassword="Passwords do not match.";
  //   }
  //   return errors;
  // }

  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitData = async (e) => {
    e.preventDefault();
    // const validationErrors = validateFormdata.apply(formData);
    // if(Object.keys(validationErrors).length > 0){
    //   setErrors(validationErrors);
    //   return;
    // }
    try {
      await axios
        .post("http://localhost:8098/user/register", {
          firstname: formData.firstname,
          lastname: formData.lastname,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        })
        .then((response) => console.log(response.json));
      navigate("/login");
      alert("Registered Successfully!!");
    } catch (error) {
      if(formData === null){
        alert('Please Enter the details')
      }
      else if(formData.firstname === null){
        alert('First Name cannot be empty');
      }
      else if(formData.email == null){
        alert(`Email is Null`);
      }
      console.log(error.response);
      console.log(error.response.data.message);
      alert(error.response.data.message);
      // alert(error.response.data.message);
    }
  };

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
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item text-info fw-3">
                  {/* <a class="nav-link " aria-current="page" href="#"> */}
                  <Link to="/login" class="nav-link " aria-current="page">Login</Link>                  
                </li>          
              </ul>
            </div>
          </div>
        </nav>
      <div>
      <div className="register-text">
        <div className="register-card">
          <div className="register-form">
          <h3 className="large text-light">SignUp</h3>
          <form className="form" onSubmit={submitData}>
            <div className="register-control fw-bold">
              <label htmlFor="name" className="mx-2">
                First Name:{" "}
              </label>
              <input
                onChange={onChange}
                type="text"
                placeholder="firstname"
                name="firstname"
                value={firstname}
                required
              />
              
            </div>
            <div className="register-control fw-bold">
              <label htmlFor="name" className="mx-2">
                Last Name:{" "}
              </label>
              <input
                onChange={onChange}
                type="text"
                placeholder="lastname"
                name="lastname"
                value={lastname}
                required
              />
            </div>
            <div className="register-control fw-bold">
              <label htmlFor="name" className="mx-2">
                User Name:{" "}
              </label>
              <input
                onChange={onChange}
                type="text"
                placeholder="username"
                name="username"
                value={username}
                required
              />
              {/* {errors.username && <div className="error">{errors.username}</div>} */}
            </div>
            <div className="register-control fw-bold">
              <label htmlFor="name" className="mx-2">
                Email:{" "}
              </label>
              <input
                onChange={onChange}
                type="email"
                placeholder="email"
                name="email"
                value={email}
                required
              />
              {/* {errors.email && <div className="error">{errors.email}</div>} */}
            </div>
            <div className="register-control fw-bold">
              <label htmlFor="name" className="mx-2">
                Password{" "}
              </label>
              <input
                onChange={onChange}
                type="Password"
                placeholder="password"
                name="password"
                value={password}
                required
              />
              {/* {errors.password && <div className="error">{errors.password}</div>} */}
            </div>
            <div className="register-control fw-bold">
              <label htmlFor="name" className="mx-2">
                ConfirmPassword{" "}
              </label>
              <input
                onChange={onChange}
                type="Password"
                placeholder="Confirmpassword"
                name="confirmPassword"
                value={confirmPassword}
                required
              />
              {/* {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>} */}
            </div>
            <div>
              <button
                className="login-btn"
                type="submit"
                value="Register"
                onChange={onChange}
              >
                Register
              </button>
             <p class="text-warning font-italic">Already an User?</p>
              <Link class="no-underline btn btn-success" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
export default Registration;

