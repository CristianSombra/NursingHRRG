import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

const Landing = () => {
    return(
        <div className="container-landing">
            <div className="row columna-izquierda">
                <div className="col-md-6 ">
                    <div className="text-center">
                        <h1>View Landing</h1>
                        <div className="mb-3">
                            <Link to="/home">
                                <button className="btn-custom">Inicio</button>
                            </Link>
                        </div>
                        <div className="mb-3">
                            <Link to="/updates">
                                <button className="btn-custom">Capacitación</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/licences">
                                <button className="btn-custom">Licencias</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Columna derecha vacía */}
                </div>
            </div>
        </div>
    );
};

export default Landing;
