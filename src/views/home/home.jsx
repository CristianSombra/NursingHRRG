import React from "react";
import { motion } from "framer-motion";
import PageTransition from '../../components/pagetransition/pagetransition';
import ScrollTop from '../../components/scrolltop/scrollTop';
import { CarouselHome, FirstSectionNews, FrequentQuestions, SecondSectionNews } from "../../components/index";
import bannerHome from '../../assets/bannerhome.jpg';
import bannerHomeMobile from '../../assets/bannerhomemobile.jpg';
import './home.css';


const sentence = "Ser Enfermero es más que un oficio, es una fusión de Ciencia, Corazón, Fortaleza y Humanidad.";

const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.04 
        }
    }
};

const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};


const Home = () => {

    const letters = sentence.split("");

    return(
        <PageTransition>
            <div className="container-fluid container-home">
            
            {/* Sección Banner Home */}
            <section className="container container-banner">
                <div className="row my-5 d-flex justify-content-center position-relative d-none d-md-flex">
                    <div className="col">
                        <motion.div 
                            initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="orange-rectangle-home"></motion.div>
                        <motion.div 
                            initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="blue-rectangle-home"></motion.div>
                        <div className="image-container">
                                <img src={bannerHome} className="img-fluid col-12" alt="" />
                                <div className="image-overlay"></div>
                        </div>
                        <div className="text-overlay">
                                <motion.h2 
                                    initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.2, delay: 0.4}}
                                    className="text-white">
                                        Departamento de Enfermería
                                    </motion.h2>
                                <motion.h4 
                                    initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.4, delay: 0.6}}
                                    >
                                        Rio Grande, Tierra del Fuego
                                    </motion.h4>
                        </div>
                    </div>
                </div>


                {/* Sección Banner Mobile */}
                <div className="row mt-5 mb-4 d-flex justify-content-center text-center d-md-none ">
                    <div className="col mt-3 titles-mobile">
                        <motion.h3
                            initial={{y: -50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}} 
                            >
                                Departamento de Enfermería
                        </motion.h3>
                        <motion.h5
                            initial={{y: -50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.4, delay: 0.6}} 
                            >
                                Rio Grande, Tierra del Fuego
                        </motion.h5>
                        <div className="image-container mt-4">
                            <img src={bannerHomeMobile} className="img-fluid" alt="" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>

                <div className="row my-3 d-flex justify-content-center text-center">
                    <p>
                        <motion.span variants={sentenceVariants} initial="hidden" animate="visible">
                            {letters.map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                            ))}
                        </motion.span>
                    </p>
                </div>

            </section>
            
            
            {/* Sección Anuncios próximos */}
            <section className="container">
                <div className="row my-5 d-flex justity-content-center text-center">
                    <motion.div
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration:1.2, delay:0.6}}
                        >
                            <h5 className="fw-bold">Próximas capacitaciones</h5>
                            <h5 className="text-muted">Mayo 2024</h5>
                    </motion.div>
                    
                    <div className="col-12 col-md-10 col-lg-8 my-3 mx-auto">
                        <CarouselHome/>
                    </div>

                    <div className="col-12">
                        <button href="" className="btn-custom">Inscribirme</button>
                    </div>

                </div>

            </section>


            {/* Sección Novedades */}
            <section className="container">
                <div className="row my-5 d-flex justify-content-center">
                    <motion.div
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="col-10 my-3">
                            <h4 className="fw-bold">Novedades</h4>
                    </motion.div>
                    <div className="col-12 col-md-10">
                        <p>Mantente actualizado de las últimas noticias o informaciones relacionadas a las actividades que se realizan, novedades, cambios, entre otros.</p>
                    </div>
                    <div className="col-11 col-md-8 col-lg-6">
                        <FirstSectionNews/>
                    </div>

                    <div className="col-11 col-md-8 col-lg-4">
                        <SecondSectionNews/>
                    </div>

                </div>
            </section>
            
            
            {/* Sección Preguntas frecuentes */}
            <section className="container">
                <div className="row my-5 d-flex justify-content-center">
                    <motion.div 
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="col-10 my-3">
                            <h4 className="fw-bold">Preguntas frecuentes</h4>
                    </motion.div>
                    <div className="col-12 col-md-10">
                        <p>Mantente actualizado de las últimas noticias o informaciones relacionadas a las actividades que se realizan, novedades, cambios, entre otros.</p>
                    </div>

                    <div className="col-12 col-md-10 col-lg-10 mx-auto">
                        <FrequentQuestions/>
                    </div>
                </div>

            </section>

            <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Home;