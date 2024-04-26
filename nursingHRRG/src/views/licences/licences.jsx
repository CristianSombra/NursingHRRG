import React from "react";
import ScrollTop from '../../components/scrolltop/scrollTop';
import cardlicences1 from '../../assets/cardlicences1.png';
import cardlicences2 from '../../assets/cardlicences2.png';
import cardlicences3 from '../../assets/cardlicences3.png';
import cardlicences4 from '../../assets/cardlicences4.png';
import './licences.css';

const Licences = () => {
    return(
        <div className="container-fluid container-licences">
            
            <section className="container-fluid container-licences-title position-relative">
                <div className="row my-5 d-flex justify-content-center text-center">
                    <div className="col-8 my-5">
                        <div className="orange-rectangle-licences"></div>
                        <div className="blue-rectangle-licences"></div>
                        <h3 className="fw-bold my-3">Sección de Licencias</h3>
                        <p>Puedes visualizar los diferentes tipos de licencias existentes, con su explicacións, pasos y los archivos descargables. Recuerda que es bueno que organices con tus compañeros de turno para la correcta planificación del personal.</p>
                    </div>
                </div>
            </section>

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
            

            <ScrollTop/>
        </div>
    );
};

export default Licences;