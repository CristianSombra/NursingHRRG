import React from "react";
import { motion } from "framer-motion";
import PageTransition from '@/components/pagetransition/pagetransition';
import ScrollTop from '@/components/scrolltop/scrollTop';
import { CarouselHome, FirstSectionNews, FrequentQuestions, SecondSectionNews, BannerHome } from "@/components/index";
import { ModalInformationA } from "@/components/modalInformation/modalInformation";
import '@/components/homeComponents/home.css';



const Home = () => {

    const handleButtonClick = () => {
        window.open('https://forms.gle/EHrgZpx45cYZ8gSAA', '_blank');
    };

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
                            <h5 className="text-muted">Junio 2024</h5>
                    </motion.div>
                    
                    <div className="col-12 col-md-10 col-lg-8 my-3 mx-auto">
                        <CarouselHome/>
                    </div>

                    <div className="col-12">
                        {/* <button href="" className="btn-custom">Inscribirme</button> */}
                        <button 
                            className="btn-custom"

                            onClick={handleButtonClick}
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
                        <p>Bienvenidos a nuestra sección de novedades, donde compartimos los últimos avances y noticias en el campo de la enfermería, ofreciendo también recursos valiosos para apoyar a nuestra práctica profesional y crecimiento continuo.</p>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8">
                        <FirstSectionNews/>
                    </div>

                    <div className="col-12 col-md-10 col-lg-8">
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
                        <p
                            style={{textAlign: 'justify'}}
                            >
                            Bienvenido a nuestra sección de Preguntas Frecuentes. Aquí encontrarás respuestas a las consultas más comunes. Nuestro objetivo es proporcionarte toda la información necesaria para una mejor experiencia al momento de tener que realizar alguna acción. Si no encuentras la respuesta que buscas, no dudes en ponerte en contacto con nosotros enviándonos un mensaje en la <strong>sección de contacto</strong>.
                        </p>
                    </div>

                    <div id="frequentquestions" className="col-12 col-md-10 col-lg-10 mx-auto">
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