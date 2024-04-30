import React from "react";
import { motion } from "framer-motion";
import PageTransition from '../../components/pagetransition/pagetransition';
import ScrollTop from '../../components/scrolltop/scrollTop';
import bannerHome from '../../assets/bannerhome.jpg';
import bannerHomeMobile from '../../assets/bannerhomemobile.jpg';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img1.png';
import img3 from '../../assets/img1.png';
import stand1 from '../../assets/stand1.png';
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import './home.css';

const Home = () => {
    return(
        <PageTransition>
            <div className="container-fluid container-home">
            
            {/* Sección Banner Home */}
            <section className="container">
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
                                    className="text-muted">
                                        Rio Grande, Tierra del Fuego
                                    </motion.h4>
                        </div>
                    </div>
                </div>

                <div className="row my-4 d-flex justify-content-center text-center d-md-none ">
                    <div className="col">
                        <h3>Departamento de Enfermería</h3>
                        <h5 className="text-disabled">Rio Grande, Tierra del Fuego</h5>
                        <div className="image-container mt-3">
                            <img src={bannerHomeMobile} className="img-fluid" alt="" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>

                <div className="row my-3 d-flex justify-content-center text-center">
                    <div className="col">
                        <p>“Ser Enfermero es más que un oficio, es una fusión de Ciencia, Corazón, Fortaleza y Humanidad”.</p>
                    </div>
                </div>

            </section>
            
            
            {/* Sección Anuncios próximos */}
            <section className="container">
                <div className="row my-5 d-flex justity-content-center text-center">
                    
                        <h5 className="fw-bold">Próximas capacitaciones</h5>
                        <h5 className="text-muted">Mayo 2024</h5>
                    
                    <div className="col-12 col-md-10 col-lg-8 my-3 mx-auto">
                        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img1} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img3} className="d-block w-100" alt="" />
                                    </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn-custom-home">
                            <p>Incribir</p>
                        </button>
                    </div>

                </div>

            </section>


            {/* Sección Novedades */}
            <section className="container">
                <div className="row my-5 d-flex justify-content-center">
                    <div className="my-3">
                        <h4 className="fw-bold">Novedades</h4>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <img src={stand1} className="img-fluid img-custom-home my-3" alt="" />
                        <h5 className="fw-bold">Semana de presentación de stands de Enfermería</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem itaque totam voluptate! Doloremque aliquam expedita earum quod? Libero, minus.</p>
                    </div>

                    <div className="col-12 col-md-8 col-lg-4">
                        <div className="row">

                            <div className="col-12">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-6 my-3">
                                        <img src={card1} className="img-fluid img-custom-home" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <h5 className="fw-bold">Ingreso a planta</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-6 my-3">
                                        <img src={card2} className="img-fluid img-custom-home" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <h5 className="fw-bold">Actividad en el RAM</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos?</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            
            
            {/* Sección Preguntas frecuentes */}
            <section className="container">
                <div className="row my-5 d-flex justity-content-center">
                    <div className="my-3">
                        <h4 className="fw-bold">Preguntas frecuentes</h4>
                    </div>

                    <div className="col-12 col-md-10 mx-auto">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item accordion-custom">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button accordion-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the Four item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the Five item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the Six item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the Seven item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Home;