import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransitionEvent from '@/components/pagetransition/pagetransition';
import imgNurse from '@/assets/nurse.png';
import logoLanding2 from '@/assets/logoLanding2.png';
import titleMobile from '@/assets/titleMobile.png';
import './landing.css';

const Landing = () => {
    return(
        <PageTransitionEvent>
            <div className="container-landing">
                <div className="left-section d-none d-md-block">
                    <img src={imgNurse} alt="" className="img-fluid img-custom-landing"/>
                    <div className="text-overlay-landing">
                        <motion.h4 
                            initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="col-12 "
                        >
                            "Si salvas una vida eres un héroe, pero si salvas 100 eres un <strong>enfermero</strong>".
                        </motion.h4>
                    </div>
                </div>
                <div className="right-section">
                    <div className="text-center">
                        <img src={logoLanding2} alt="Logo" className="logoMobile"/>
                        <h1 className="fw-bold">Bienvenido</h1>
                        <div className="my-5">
                            <div className="mb-3">
                                <Link to="/home">
                                    <button className="btn-custom-landing" >Inicio</button>
                                </Link>
                            </div>
                            <div className="mb-3">
                                <Link to="/updates">
                                    <button className="btn-custom-landing" >Capacitación</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/licences">
                                    <button className="btn-custom-landing" >Licencias</button>
                                </Link>
                            </div>
                        </div>
                        <img src={titleMobile} alt="Logo" className="titleMobile"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <motion.p 
                                    initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.2, delay: 0.4}}
                                    className="col-11 my-3 d-block d-md-none"
                                >
                                    "Si salvas una vida eres un héroe, pero si salvas 100 eres un <strong>enfermero</strong>".
                        </motion.p>
                    </div>
                </div>
            </div>
        </PageTransitionEvent>
    );
};

export default Landing;
