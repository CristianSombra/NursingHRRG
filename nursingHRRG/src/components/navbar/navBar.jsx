import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoNav from '../../assets/logonav.png';
import "./navBar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            
                <div className="container-fluid my-3">
                    <img src={logoNav} className="img-fluid" style={{width: '60px'}} alt="" />
                        <div className={`custom-menu-button d-lg-none ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: isMenuOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`collapse navbar-collapse justify-content-center text-center ${isMenuOpen ? 'show' : ''}`}
                        style={{ overflowY: isMenuOpen ? 'hidden' : 'visible' }}
                        >
                        <div className="navbar-nav mt-3 ms-auto">
                            <Link to="/home" className="nav-link" onClick={closeMenu}>Inicio</Link>
                            <Link to="/updates" className="nav-link" onClick={closeMenu}>Capacitación</Link>
                            <Link to="/licences" className="nav-link" onClick={closeMenu}>Licencias</Link>
                            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contacto</Link>
                        </div>
                    </motion.div>
                </div>
        </nav>
    );
};

export default Navbar;