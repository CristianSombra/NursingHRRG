import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";
import "./navBar.css";

const logoNav = "https://res.cloudinary.com/nursingstaff/image/upload/v1715565542/nursingHRRG/Components/Navbar/logoNav_p32t8i.png";

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
            
                <div className="container-fluid">
                    <Link to="/">
                    <Image cloudName="nursingstaff" publicId={logoNav} className="img-fluid" style={{width: '90px'}}/>
                    </Link>
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
                            <motion.div
                                initial={{y: 0}}
                                whileHover={{y: -3}}
                                transition={{duration: 0.1}}
                                >
                                <Link to="/home" className="nav-link" onClick={closeMenu}>
                                    Inicio
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{y: 0}}
                                whileHover={{y: -3}}
                                transition={{duration: 0.1}}
                                >
                                <Link to="/updates" className="nav-link" onClick={closeMenu}>
                                    Capacitación
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{y: 0}}
                                whileHover={{y: -3}}
                                transition={{duration: 0.1}}
                                >
                                <Link to="/licenses" className="nav-link" onClick={closeMenu}>
                                    Licencias
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{y: 0}}
                                whileHover={{y: -3}}
                                transition={{duration: 0.1}}
                                >
                                <Link to="/contact" className="nav-link" onClick={closeMenu}>
                                    Contacto
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
        </nav>
    );
};

export default Navbar;