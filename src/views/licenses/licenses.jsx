import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import PageTransition from '../../components/pagetransition/pagetransition';
import ScrollTop from '../../components/scrolltop/scrollTop';
import cardlicences1 from '../../assets/cardlicences1.png';
import cardlicences2 from '../../assets/cardlicences2.png';
import cardlicences3 from '../../assets/cardlicences3.png';
import cardlicences4 from '../../assets/cardlicences4.png';
import './licenses.css';

const Licenses = () => {

    const basePath = '/';
    const pdfPath = basePath + "licences/";

    return(
        <PageTransition>
            <div className="container-fluid container-licenses">
            
            {/* Sección titulo */}
            <section className="container-fluid container-licenses-title position-relative">
                <div className="row my-5 d-flex justify-content-center text-center">
                    <div className="col-8 my-5">
                        <motion.div 
                            initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="orange-rectangle-licenses"></motion.div>
                        <motion.div 
                            initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="blue-rectangle-licenses"></motion.div>
                        <motion.h3 
                            initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                            animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="fw-bold my-3">
                                Sección de Licencias
                        </motion.h3>
                        <motion.p
                            initial={{opacity:0, filter: 'blur(4px)'}}
                            animate={{opacity:1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.6}}
                            >
                                Puedes visualizar los diferentes tipos de licencias existentes, con su explicacións, pasos y los archivos descargables. Recuerda que es bueno que organices con tus compañeros de turno para la correcta planificación del personal.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Sección Licencias 1 */}
            <section className="container">
                <div className="row my-5 d-flex justify-content-center align-items-center">
                    <div className="col-10 col-md-5 col-lg-3 mb-3">
                        <img src={cardlicences1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <h4 className="fw-bold mt-3">Licencia especial verano</h4>
                        <p className="my-3">Esta licencia se puede tomar desde diciembre a diciembre de cada año. Se debe solicitar al jefe del servicio con 2 semanas de anticipación.</p>
                        <div className="btn-download-licences">
                            <button className="btn btn-primary"> Descargar</button>
                        </div>
                    </div>
                </div>

                <div className="row my-5 d-flex justify-content-center align-items-center">
                    <div className="col-10 col-md-5 col-lg-3 mb-3">
                        <img src={cardlicences2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <h4 className="fw-bold mt-3">Licencia especial invierno</h4>
                        <p className="my-3">Esta licencia se puede tomar desde mayo a octubre de cada año. Se debe solicitar al jefe del servicio con 2 semanas de anticipación.</p>
                        <div className="btn-download-licences">
                            <button className="btn btn-primary"> Descargar</button>
                        </div>
                    </div>
                </div>

                <div className="row my-5 d-flex justify-content-center align-items-center">
                    <div className="col-10 col-md-5 col-lg-3 mb-3">
                        <img src={cardlicences3} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <h4 className="fw-bold mt-3">Licencia artículo 14F</h4>
                        <p className="my-3">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son 7 anuales. Se debe solicitar al jefe del servicio con 48hs de anticipación.</p>
                        <div className="btn-download-licences">
                            <button className="btn btn-primary"> Descargar</button>
                        </div>
                    </div>
                </div>

                <div className="row my-5 d-flex justify-content-center align-items-center">
                    <div className="col-10 col-md-5 col-lg-3 mb-3">
                        <img src={cardlicences4} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <h4 className="fw-bold mt-3">Licencia artículo 14H</h4>
                        <p className="my-3">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son 7 anuales. Se debe solicitar al jefe del servicio con 48hs de anticipación.</p>
                        <div className="btn-download-licences">
                            <button className="btn btn-primary"> Descargar</button>
                        </div>
                    </div>
                </div>

            </section>
        
            {/* Sección licencias 2 */}
            <section className="container">
                <div className="row mt-5 justify-content-center ">
                    <div className="col-12 col-md-8">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-lg table-custom-licenses">
                                <caption className="text-center">Lista de licencias</caption>
                                <thead>
                                    <tr className="table-dark text-center">
                                        <th>Licencias</th>
                                        <th>Archivo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Formulario de permiso de salida</th>
                                        <th className="text-center">
                                            <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                            </a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Formulario de cambio de turno</th>
                                        <th className="text-center">
                                            <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                            </a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Otro tipo de formulario a solicitar</th>
                                        <th className="text-center">
                                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                            </a>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>


            <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Licenses;