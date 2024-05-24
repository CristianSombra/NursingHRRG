import React from "react";
import { motion } from "framer-motion";
import './spinnerLoader.css';

const sentence = "Preparando todo para una mejor experiencia ";

const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.04 
        }
    }
};

const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

const SpinnerLoader = () => {

    const letters = sentence.split("");

    return (
        <div className="spinner-container">
            <img src="./sp.svg" alt="Spinner" className="spinner mb-3"/>
            <h4>
                <motion.span variants={sentenceVariants} initial="hidden" animate="visible" className="my-3">
                        {letters.map((letter, index) => (
                            <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                        ))}
                </motion.span>
            </h4>
            <motion.span 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay: 1.9}}
                style={{fontSize: '1.8rem'}}
                role="img" aria-label="emoji">😃</motion.span>
        </div>
    );
}

export default SpinnerLoader;
