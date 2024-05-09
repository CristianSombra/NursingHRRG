import React from "react";
import { Link } from "react-router-dom";
import PageTransitionEvent from '../../components/pagetransition/pagetransition';
import imgNurse from '../../assets/nurse.png';
import logoLanding from '../../assets/logoLanding.png';
import logoLanding2 from '../../assets/logoLanding2.png';
import titleMobile from '../../assets/titleMobile.png';
import './landing.css';

const Landing = () => {
    return(
        <PageTransitionEvent>
            <div className="container-landing">
                <div className="left-section d-none d-md-block">
                    <img src={imgNurse} alt="" className="img-fluid img-custom-landing"/>
                    <img src={logoLanding} alt="Logo" className="logo"/>
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
                </div>
            </div>
        </PageTransitionEvent>
    );
};

export default Landing;
