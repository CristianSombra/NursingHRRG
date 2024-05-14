import React from "react";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";
import { inMaintenance }  from "@/components/cloudinary/updates/imagesUpdates";

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
                                    <Image cloudName="nursingStaff" publicId={inMaintenance} className="card-img-top img-fluid" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Titulo de la capacitación</h5>
                                        <p className="card-text mb-3">Descripción de la capacitación a cargar.</p>
                                        <div className="text-center text-md-end my-2">
                                            <a href="#" className="btn-custom">Ver más</a>
                                        </div>
                                    </div>
                            </motion.div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 my-3">
                            <div className="card card-custom">
                                <Image cloudName="nursingStaff" publicId={inMaintenance} className="card-img-top img-fluid" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Titulo de la capacitación</h5>
                                    <p className="card-text mb-3">Descripción de la capacitación a cargar.</p>
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
                                <Image cloudName="nursingStaff" publicId={inMaintenance} className="card-img-top img-fluid"  alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Titulo de la capacitación</h5>
                                    <p className="card-text mb-3">Descripción de la capacitación a cargar.</p>
                                    <div className="text-center text-md-end my-2">
                                        <a href="#" className="btn-custom">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 my-3">
                            <div className="card card-custom">
                                <Image cloudName="nursingStaff" publicId={inMaintenance} className="card-img-top img-fluid"  alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Titulo de la capacitación</h5>
                                    <p className="card-text mb-3">Descripción de la capacitación a cargar.</p>
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