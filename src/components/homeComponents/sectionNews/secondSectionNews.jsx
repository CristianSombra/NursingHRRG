import React from "react";
import { Image } from "cloudinary-react";
import imagesHome from '@/components/cloudinary/home/imagesHome';
import { ModalSecondSectionA, ModalSecondSectionB } from '../modalNews/modalSecondSection';

const SecondSectionNews = () => {
    return(
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 my-3">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card2} className="img-fluid img-custom-home" alt="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h5 className="fw-bold text-center text-md-start">Ingreso a planta</h5>
                            <p className="text-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos?</p>
                        </div>
                        <button 
                            className="btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-2"
                            >
                                Ver más
                        </button>
                        <ModalSecondSectionA/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 my-3">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card3} className="img-fluid img-custom-home" alt="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h5 className="fw-bold text-center text-md-start">Actividad en el RAM</h5>
                            <p className="text-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos?</p>
                        </div>
                        <button 
                            className="btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-3"
                            >
                                Ver más
                        </button>
                        <ModalSecondSectionB/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSectionNews;