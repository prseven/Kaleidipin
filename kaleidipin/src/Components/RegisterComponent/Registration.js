import { useState, React } from "react";
import "./Registration.css";
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';


function Registration(props) {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    const  navigate= useNavigate();
   
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
  });

    const { firstname, lastname, username, email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitData = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8098/user/register",
            {
                firstname:formData.firstname,
                lastname:formData.lastname,
                username:formData.username,
                email:formData.email,
                password:formData.password
            }).then((response) => console.log(response.json))
            navigate("/login");
            alert('Registered Successfully!!')
        }
        catch(error){
            console.log(error);
            alert("Error in Registration", error)
        }}
        

  return (
    <div className="register-text">
      <div className="register-card">
        <h1 className="large text-primary">Register Here</h1>
        <form className="form" onSubmit={submitData}>
          <div className="register-control">
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
          <div className="register-control">
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
          <div className="register-control">
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
          </div>
          <div className="register-control">
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
          </div>
          <div className="register-control">
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
            {/* <Link className="btn btn-info-outline" to="/login">Registration</Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Registration;
