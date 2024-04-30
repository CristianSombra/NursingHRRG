import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({children}) => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.7, delay: 0.1}}
            onAnimationComplete={() => window.scrollTo(0, 0)}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition;