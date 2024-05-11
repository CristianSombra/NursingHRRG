import React from "react";
import { motion } from "framer-motion";
import card1 from '@/assets/cardupdate1.png';
import card2 from '@/assets/cardupdate2.png';
import card3 from '@/assets/cardupdate3.png';
import card4 from '@/assets/cardupdate4.png';

const UpdatesSections = () => {
    return(
        <div>
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-12">
                    <motion.h4 
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="fw-bold my-3">
                            Capacitaciones mes de Mayo
                    </motion.h4>
                    <div className="row d-flex justify-content-around mx-auto">
                        <div className="col-12 col-md-8 col-lg-5 my-3">
                            <motion.div
                                className="card card-custom">
                                    <img src={card1} className="card-img-top img-fluid" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Actualización de RCP avanzado</h5>
                                        <p className="card-text mb-3">Participa de las últimos procedimientos en RCP y protección de vía aérea</p>
                                        <div className="text-center text-md-end my-2">
                                            <a href="#" className="btn-custom">Ver más</a>
                                        </div>
                                    </div>
                            </motion.div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 my-3">
                            <div className="card card-custom">
                                <img src={card2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">RCP avanzado en Neonatología</h5>
                                    <p className="card-text mb-3">Participa de las últimos procedimientos de RCP en Neonatología.</p>
                                    <div className="text-center text-md-end my-2">
                                        <a href="#" className="btn-custom">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                <div className="text-end">
                    <motion.h4 
                        initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="fw-bold mt-5 my-3">
                            Capacitaciones mes de Junio
                    </motion.h4>
                </div>
                    <div className="row d-flex justify-content-around mx-auto">
                        <div className="col-12 col-md-8 col-lg-5 my-3">
                            <div className="card card-custom">
                                <img src={card3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Manejo de ABC avanzado en emergencias</h5>
                                    <p className="card-text mb-3">Participa de la capacitación teórico-práctico del manejo avanzado del ABC.</p>
                                    <div className="text-center text-md-end my-2">
                                        <a href="#" className="btn-custom">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 my-3">
                            <div className="card card-custom">
                                <img src={card4} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Emergencias prehospitalaria</h5>
                                    <p className="card-text mb-3">Participa de la capacitación teórico-práctico del manejo avanzo de atención prehospitalaria.</p>
                                    <div className="text-center text-md-end my-2">
                                        <a href="#" className="btn-custom">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesSections;