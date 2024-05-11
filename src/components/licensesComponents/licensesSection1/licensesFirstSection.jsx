import React from "react";
import { motion } from "framer-motion";
import cardlicences1 from '@/assets/cardlicences1.png';
import cardlicences2 from '@/assets/cardlicences2.png';
import cardlicences3 from '@/assets/cardlicences3.png';
import cardlicences4 from '@/assets/cardlicences4.png';

const LicensesFirstSection = () => {

    const basePath = '/';
    const pdfPath = basePath + "licences/";


    return(
        <div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.img 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={cardlicences1} className="img-fluid img-custom" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia especial verano</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar desde diciembre a diciembre de cada año. Se debe solicitar al jefe del servicio con 2 semanas de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.img 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={cardlicences2} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia especial invierno</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar desde mayo a octubre de cada año. Se debe solicitar al jefe del servicio con 2 semanas de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.img 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={cardlicences3} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia artículo 14F</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son 7 anuales. Se debe solicitar al jefe del servicio con 48hs de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.img 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={cardlicences4} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia artículo 14H</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son 7 anuales. Se debe solicitar al jefe del servicio con 48hs de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicensesFirstSection;