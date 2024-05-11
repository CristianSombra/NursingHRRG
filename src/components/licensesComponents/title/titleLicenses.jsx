import React from "react";
import { motion } from "framer-motion";

const TitleLicenses = () => {
    return(
        <div>
            <div className="row my-5 d-flex justify-content-center text-center">
                <div className="col-8 my-5">
                    <motion.div 
                        initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="orange-rectangle-licenses"></motion.div>
                    <motion.div 
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="blue-rectangle-licenses"></motion.div>
                    <motion.h3 
                        initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                        animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="fw-bold my-3">
                            Sección de Licencias
                    </motion.h3>
                    <motion.p
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.6}}
                        >
                            Puedes visualizar los diferentes tipos de licencias existentes, con su explicacións, pasos y los archivos descargables. Recuerda que es bueno que organices con tus compañeros de turno para la correcta planificación del personal.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default TitleLicenses;