import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Navbar, Footer, SpinnerLoader } from './components/index';
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3100)
    return () => clearTimeout(timer)
  }, []);


  return (
    <div>
      {loading ? <SpinnerLoader /> : (
        <>
          {showNav && <Navbar />}
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/updates" element={<Updates />} />
            <Route exact path="/licenses" element={<Licenses />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <ToastContainer />
          {showFooter && <Footer />}
        </>
      )}
    </div>
  );
};

export default App
