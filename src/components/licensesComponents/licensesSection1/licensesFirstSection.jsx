import React from "react";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import imagesLicenses from "@/components/cloudinary/licenses/imagesLicenses";

const LicensesFirstSection = () => {

    const basePath = '/';
    const pdfPath = basePath + "licences/";


    return(
        <div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={imagesLicenses.cardLar}
                            className="img-fluid img-custom" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia especial verano</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar desde diciembre a diciembre de cada año. Se debe solicitar al jefe del servicio con 2 semanas de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "LAR.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={imagesLicenses.cardLei}
                            className="img-fluid img-custom" alt="" />
                    </motion.div>
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
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={imagesLicenses.card14F}
                            className="img-fluid img-custom" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia artículo 14F</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son 7 anuales. Se debe solicitar al jefe del servicio con 48hs de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "14F.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={imagesLicenses.card14H}
                            className="img-fluid img-custom" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia artículo 14H</h4>
                    <p className="my-3 mb-4">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son 7 anuales. Se debe solicitar al jefe del servicio con 48hs de anticipación.</p>
                    <div className="text-center text-md-center my-2">
                        <a href={pdfPath + "14H.pdf"} target="_blank" rel="noreferrer" className="btn-custom">Descargar formulario</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicensesFirstSection;