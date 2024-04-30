import React from "react";
import PageTransition from '../../components/pagetransition/pagetransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
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

    return(
        <PageTransition>
            <div className="container-fluid container-updates">

                {/* Sección Banner Updates */}
                <div className="container">
                    <div className="row my-5 d-flex justify-content-center position-relative d-none d-md-flex">
                        <div className="col">
                            <div className="orange-rectangle-updates"></div>
                            <div className="blue-rectangle-updates"></div>
                            <div className="image-container-updates">
                                <img src={bannerUpdates} className="img-fluid col-12" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row my-4 d-flex justify-content-center text-center d-md-none">
                    <div className="col">
                        <div className="image-container mt-3">
                            <img src={bannerUpdatesMobile} className="img-fluid" alt="" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>

                </div>
            
                {/* Sección Título */}
                <div className="container">
                    <div className="row my-3 d-flex justify-content-center text-center">
                        <div className="col">
                            <h3 className="fw-bold my-3">Formación continua</h3>
                            <p>Puedes visualizar las capcitaciones que quieras realizar, para planificarte con anticipacion y poder  formar parte de la experiencia contribuir a tu formación profesional.</p>
                        </div>
                    </div>
                </div>
            
                {/* Sección Capacitaciones */}
                <div className="container">
                    <div className="row my-5 d-flex justify-content-center">

                        <div className="col-12">
                            <h4 className="fw-bold text-muted my-3">Capacitaciones mes de Mayo</h4>
                            <div className="row d-flex justify-content-around mx-auto">
                                <div className="col-12 col-md-8 col-lg-5 my-3">
                                    <div className="card card-custom">
                                        <img src={card1} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-8 col-lg-5 my-3">
                                    <div className="card card-custom">
                                        <img src={card2} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                        <div className="text-end">
                            <h4 className="fw-bold text-muted mt-5 my-3">Capacitaciones mes de Junio</h4>

                        </div>
                            <div className="row d-flex justify-content-around mx-auto">
                                <div className="col-12 col-md-8 col-lg-5 my-3">
                                    <div className="card card-custom">
                                        <img src={card3} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-8 col-lg-5 my-3">
                                    <div className="card card-custom">
                                        <img src={card4} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
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
                            <div className="table-responsive">
                                <table className="table table-striped table-hover table-lg">
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

export default Updates;