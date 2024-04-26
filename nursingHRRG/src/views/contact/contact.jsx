import React from "react";
import ScrollTop from '../../components/scrolltop/scrollTop';
import './contact.css';

const Contact = () => {
    return(
        <div className="container-fluid container-contact">
            
            <section className="container-fluid container-contact-title position-relative">
                <div className="row my-5 d-flex justify-content-center text-center">
                    <div className="col-8 my-5">
                        <div className="orange-rectangle-contact"></div>
                        <div className="blue-rectangle-contact"></div>
                        <h3 className="fw-bold my-3">Contacto</h3>
                        <p>Puedes visualizar los diferentes tipos de licencias existentes, con su explicacións, pasos y los archivos descargables. Recuerda que es bueno que organices con tus compañeros de turno para la correcta planificación del personal.</p>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, similique.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat minus tenetur eligendi numquam molestias.</p>
                    </div>
                </div>
            </section>
            

            <ScrollTop/>
        </div>
    );
};

export default Contact;