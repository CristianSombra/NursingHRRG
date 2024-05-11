import React from "react";
import { motion } from "framer-motion";

const TitleUpdates = () => {
    return(
        <div>
                    <div className="row my-3 d-flex justify-content-center text-center d-none d-md-flex">
                        <div className="col">
                            <motion.h3 
                                initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                                animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                className="fw-bold my-3">
                                    Formación continua
                                </motion.h3>
                            <motion.p 
                                initial={{opacity:0, filter: 'blur(4px)'}}
                                animate={{opacity:1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.6}}
                            >
                                Puedes visualizar las capcitaciones que quieras realizar, para planificarte con anticipacion y poder  formar parte de la experiencia contribuir a tu formación profesional.
                            </motion.p>
                        </div>
                    </div>
        </div>
    );
};


const TitleUpdatesMobile = () => {
    return(
        <div>
                    <div className="row my-5 d-flex justify-content-center text-center d-md-none">
                        <div className="col-8 my-5">
                            <motion.h3 
                                initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                                animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                className="fw-bold my-3">
                                    Formación continua
                                </motion.h3>
                            <motion.p 
                                initial={{opacity:0, filter: 'blur(4px)'}}
                                animate={{opacity:1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.6}}
                            >
                                Puedes visualizar las capcitaciones que quieras realizar, para planificarte con anticipacion y poder  formar parte de la experiencia contribuir a tu formación profesional.
                            </motion.p>
                        </div>
                    </div>
        </div>
    )
}

export {
    TitleUpdates,
    TitleUpdatesMobile
}