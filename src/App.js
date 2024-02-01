
import './App.css';
import Registration from './Components/RegisterComponent/Registration';
import LandingPage from './Components/landing/LandingPage';
import Login from './Components/LoginComponent/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import DateSearch from './Components/SearchComponents/DateSearch';
import Fav from './Components/Favourite/Fav';




function App(props) {
 
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/date" element={<DateSearch /> }></Route>
        <Route path="/fav" element={ <Fav/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
