import React from "react";
import { motion } from "framer-motion";
import PageTransition from '@/components/pagetransition/pagetransition';
import ScrollTop from '@/components/scrolltop/scrollTop';
import { CarouselHome, FirstSectionNews, FrequentQuestions, SecondSectionNews, BannerHome } from "@/components/index";
import ModalInformationA from "@/components/modalInformation/modalInformation";
import '@/components/homeComponents/home.css';



const Home = () => {

    return(
        <PageTransition>
            <div className="container-fluid container-home">
            
            {/* Sección Banner Home */}
            <section className="container container-banner">
                <BannerHome/>
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
                        {/* <button href="" className="btn-custom">Inscribirme</button> */}
                        <button 
                            className="btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-4"
                            >
                            Inscribirme
                        </button>
                        <ModalInformationA/>
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