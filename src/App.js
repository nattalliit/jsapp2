
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';
import { BrowserRouter, Routes} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Landing_Page/LandingPage';

// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Layout/>}/>
             
              {/*<Route path="/Login" element={<Login/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
// eslint-disable-next-line no-unused-vars
import Login from './Components/Login/Login';
// eslint-disable-next-line no-unused-vars
import SignUp from './Components/Sign_Up/Sign_Up';
 <Route path="/Home" element={<Layout/>}/>
              import Home from './Components/Landing_Page/Landing_page';
              */}
              
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
