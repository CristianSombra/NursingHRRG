import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";
import imagesLanding from "@/components/cloudinary/landing/imagesLanding";
import PageTransitionEvent from '@/components/pagetransition/pagetransition';
import './landing.css';

const Landing = () => {
    return(
        <PageTransitionEvent>
            <div className="container-landing">
                <div className="left-section d-none d-md-block">
                    <Image cloudName="nursingstaff" publicId={imagesLanding.imageLanding} className="img-fluid img-custom-landing"/>
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
                        <Image cloudName="nursingstaff" publicId={imagesLanding.logoLanding1} alt="Logo" className="logoMobile"/>
                        <h1 className="fw-bold">Bienvenido</h1>
                        <div className="mt-5 mb-4">
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
                                <Link to="/licenses">
                                    <button className="btn-custom-landing" >Licencias</button>
                                </Link>
                            </div>
                        </div>
                        <Image cloudName="nursingstaff" publicId={imagesLanding.logoLanding2} alt="Logo" className="titleMobile"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <motion.p 
                                    initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.2, delay: 0.4}}
                                    className="col-11 my-2 d-block d-md-none"
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
