
import './App.css';
import Registration from './Components/RegisterComponent/Registration';
import LandingPage from './Components/landing/LandingPage';
import Login from './Components/LoginComponent/Login';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
