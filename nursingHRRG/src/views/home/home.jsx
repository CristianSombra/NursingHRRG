import React from "react";
import ScrollTop from '../../components/scrolltop/scrollTop';
import bannerHome from '../../assets/bannerhome.jpg';
import bannerHomeMobile from '../../assets/bannerhomemobile.jpg';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img1.png';
import img3 from '../../assets/img1.png';
import './home.css';

const Home = () => {
    return(
        <div className="container-fluid">
            
            {/* Sección Banner Home */}
            <section className="container">
                <div className="row my-5 d-flex justify-content-center position-relative d-none d-md-flex">
                    <div className="col">
                        <div className="orange-rectangle"></div>
                        <div className="blue-rectangle"></div>
                        <div className="image-container">
                            <img src={bannerHome} className="img-fluid col-12" alt="" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="text-overlay">
                            <h2 className="text-white">Departamento de Enfermería</h2>
                            <h4 className="text-muted">Rio Grande, Tierra del Fuego</h4>
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



            
            <div className="row my-5 d-flex justity-content-center">
                <div className="col">
                    <h1>Texto de relleno</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat qui laboriosam unde necessitatibus rerum numquam. Ratione, ipsum magnam dicta eveniet quidem tempore assumenda expedita totam odit sequi rerum nesciunt omnis enim. Animi quae eos, ex repellendus voluptas saepe ducimus esse perspiciatis sit expedita culpa quia accusamus similique consectetur necessitatibus.</p>
                </div>
            </div>
            <div className="row my-5 d-flex justity-content-center">
                <div className="col">
                    <h1>Texto de relleno</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat qui laboriosam unde necessitatibus rerum numquam. Ratione, ipsum magnam dicta eveniet quidem tempore assumenda expedita totam odit sequi rerum nesciunt omnis enim. Animi quae eos, ex repellendus voluptas saepe ducimus esse perspiciatis sit expedita culpa quia accusamus similique consectetur necessitatibus.</p>
                </div>
            </div>
            <div className="row my-5 d-flex justity-content-center">
                <div className="col">
                    <h1>Texto de relleno</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat qui laboriosam unde necessitatibus rerum numquam. Ratione, ipsum magnam dicta eveniet quidem tempore assumenda expedita totam odit sequi rerum nesciunt omnis enim. Animi quae eos, ex repellendus voluptas saepe ducimus esse perspiciatis sit expedita culpa quia accusamus similique consectetur necessitatibus.</p>
                </div>
            </div>
            <div className="row my-5 d-flex justity-content-center">
                <div className="col">
                    <h1>Texto de relleno</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat qui laboriosam unde necessitatibus rerum numquam. Ratione, ipsum magnam dicta eveniet quidem tempore assumenda expedita totam odit sequi rerum nesciunt omnis enim. Animi quae eos, ex repellendus voluptas saepe ducimus esse perspiciatis sit expedita culpa quia accusamus similique consectetur necessitatibus.</p>
                </div>
            </div>
            <ScrollTop/>
        </div>

    );
};

export default Home;