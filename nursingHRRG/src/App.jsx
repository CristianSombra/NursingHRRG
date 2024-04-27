import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Navbar, Footer } from './components/index';
import {
  Landing,
  Home,
  Updates,
  Licenses,
  Contact
} from './views/index'; 
import './App.css'

function App() {
  const location = useLocation();
  const showNav = location.pathname !== "/";
  const showFooter = location.pathname !== "/";


  return (
    <div>
      {showNav && <Navbar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/updates" element={<Updates />} />
        <Route exact path="/licences" element={<Licenses />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
      {showFooter && <Footer />}
    </div>
  );
};

export default App
