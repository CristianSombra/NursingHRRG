import React from "react";
import stand1 from '@/assets/stand1.png';


const FirstSectionNews = () => {
    return(
        <div>
            <img src={stand1} className="img-fluid img-custom-home my-3" alt="" />
            <h5 className="fw-bold text-center text-md-start">Semana de presentación de stands de Enfermería</h5>
            <p className="text-center text-md-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem itaque totam voluptate! Doloremque aliquam expedita earum quod? Libero, minus.</p>
        </div>
    )
}

export default FirstSectionNews;