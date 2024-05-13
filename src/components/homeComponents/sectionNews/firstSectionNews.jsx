import React from "react";
import { Image } from "cloudinary-react";
import imagesHome from '@/components/cloudinary/home/imagesHome';


const FirstSectionNews = () => {
    return(
        <div>
            <Image cloudName="nursingStaff" publicId={imagesHome.card1} className="img-fluid img-custom-home my-3" alt="" />
            <h5 className="fw-bold text-center text-md-start">Semana de presentación de stands de Enfermería</h5>
            <p className="text-center text-md-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem itaque totam voluptate! Doloremque aliquam expedita earum quod? Libero, minus.</p>
        </div>
    )
}

export default FirstSectionNews;