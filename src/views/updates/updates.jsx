import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import PageTransition from '../../components/pagetransition/pagetransition';
import bannerUpdates from '../../assets/bannerupdate.jpg';
import bannerUpdatesMobile from '../../assets/bannerupdatemobile.jpg';
import card1 from '../../assets/cardupdate1.png';
import card2 from '../../assets/cardupdate2.png';
import card3 from '../../assets/cardupdate3.png';
import card4 from '../../assets/cardupdate4.png';
import ScrollTop from '../../components/scrolltop/scrollTop';
import './updates.css';

const Updates = () => {
    const basePath = '/';
    const pdfPath = basePath + "licences/";

    const sentence = "El aprendizaje es experiencia. Todo lo demás es información.";

    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.4,
                staggerChildren: 0.03
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };


    return(
        <PageTransition>
            <div className="container-fluid container-updates">

                {/* Sección Banner Updates */}
                <section className="container">
                    <div className="row my-5 d-flex justify-content-center position-relative d-none d-md-flex">
                        <div className="col">
                            <motion.div 
                                initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                className="orange-rectangle-updates"></motion.div>
                            <motion.div 
                                initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                className="blue-rectangle-updates"></motion.div>
                            <div className="image-container-updates">
                                <img src={bannerUpdates} className="img-fluid col-12" alt="" />
                                <div className="blue-rectangle-updates-over">
                                    <div className="text-container">
                                        <motion.p
                                            className="banner-updates-text"
                                            variants={textContainerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            >
                                            {['"'].concat(sentence.split(""), '"').map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                                ))}
                                        </motion.p>
                                        <motion.p
                                            className="banner-updates-author"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1.2, delay: 1.8 }}
                                        >
                                            - Albert Einstein
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            
                {/* Sección Título */}
                <section className="container">
                    <div className="row my-3 d-flex justify-content-center text-center d-none d-md-flex">
                        <div className="col">
                            <motion.h3 
                                initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                                animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                className="fw-bold my-3">
                                    Formación continua
                                </motion.h3>
                            <motion.p 
                                initial={{opacity:0, filter: 'blur(4px)'}}
                                animate={{opacity:1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.6}}
                            >
                                Puedes visualizar las capcitaciones que quieras realizar, para planificarte con anticipacion y poder  formar parte de la experiencia contribuir a tu formación profesional.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Sección Título mobile */}
                <section className="container-fluid container-updates-title">
                    <div className="row my-5 d-flex justify-content-center text-center d-md-none">
                        <div className="col-8 my-5">
                            <motion.h3 
                                initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                                animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                className="fw-bold my-3">
                                    Formación continua
                                </motion.h3>
                            <motion.p 
                                initial={{opacity:0, filter: 'blur(4px)'}}
                                animate={{opacity:1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.6}}
                            >
                                Puedes visualizar las capcitaciones que quieras realizar, para planificarte con anticipacion y poder  formar parte de la experiencia contribuir a tu formación profesional.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Sección Banner mobile */}
                <section className="container">
                    <div className="row my-4 d-flex justify-content-center text-center d-md-none">
                        <div className="col">
                            <motion.div 
                                initial={{x: 50, opacity: 0, filter: 'blur(5px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.6, delay: 0.6}}
                                className="image-container my-3">
                                    <img src={bannerUpdatesMobile} className="img-fluid" alt="" />
                                    <div className="image-overlay"></div>
                            </motion.div>
                        </div>
                        <div className="col-12">
                            <motion.p
                                variants={textContainerVariants}
                                initial="hidden"
                                animate="visible"
                                >
                                {['"'].concat(sentence.split(""), '"').map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                                ))}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, delay: 1.8 }}
                                style={{ fontStyle: 'italic' }}
                            >
                                - Albert Einstein
                            </motion.p>
                        </div>
                    </div>
                </section>
            
                {/* Sección Capacitaciones */}
                <div className="container">
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
                                <div className="col-12 col-md-6 col-lg-5 my-3">
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

                                <div className="col-12 col-md-6 col-lg-5 my-3">
                                    <div className="card card-custom">
                                        <img src={card2} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">RCP avanzado en Neonatología</h5>
                                            <p className="card-text mb-3">Participa de las últimos procedimientos en RCP y protección de vía aérea en Neonatología.</p>
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

                {/* Sección Materiales de utilidad */}
                <section className="container">
                    <div className="row mt-5 justify-content-center ">
                        <div className="col-12 col-md-8">
                            <div className="text-center">
                                <h4 className="fw-bold my-3" >Descargables de estudio</h4>
                                <p>En la siguiente tabla podrás acceder a bibliografía de utilidad en formato PDF.</p>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover table-lg table-custom-updates">
                                    <caption className="text-center">Material de estudio</caption>
                                    <thead>
                                        <tr className="table-dark text-center">
                                            <th>Materiales de estudio</th>
                                            <th>Archivo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Últimas bases de RCP</th>
                                            <th className="text-center">
                                                <motion.div 
                                                    initial={{y: 0}}
                                                    whileHover={{y: -10}}
                                                    transition={{duration: 0.2, delay: 0.1}}>
                                                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                            <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                        </a>
                                                </motion.div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>El mobbing y el ambiente laboral</th>
                                            <th className="text-center">
                                                <motion.div 
                                                    initial={{y: 0}}
                                                    whileHover={{y: -10}}
                                                    transition={{duration: 0.2, delay: 0.1}}>
                                                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                            <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                        </a>
                                                </motion.div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>Últimas actualizaciones en emergencias</th>
                                            <th className="text-center">
                                                <motion.div 
                                                    initial={{y: 0}}
                                                    whileHover={{y: -10}}
                                                    transition={{duration: 0.2, delay: 0.1}}>
                                                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                            <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                        </a>
                                                </motion.div>
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

export default Updates;