import React from "react";
import { Image } from "cloudinary-react";
import imagesHome from '@/components/cloudinary/home/imagesHome';
import { ModalSecondSectionA, ModalSecondSectionB } from '../modalNews/modalSecondSection';

const SecondSectionNews = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-12 my-3">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card2} className="img-fluid img-custom-home" alt="" />
                        </div>
                        <div className="col-12 col-lg-12">
                            <h5 className="fw-bold text-center text-md-start">Colaboración</h5>
                            <p className="text-center text-md-start">Se recibió colaboración de varias instituciones para los breaks de cada día.</p>
                        </div>
                            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center align-items-md-start mb-4">
                                <button
                                    className="btn-custom"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-2"
                                >
                                    Ver más
                                </button>
                            </div>
                        <ModalSecondSectionA />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-12 my-3">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card3} className="img-fluid img-custom-home" alt="" />
                        </div>
                        <div className="col-12 col-lg-12">
                            <h5 className="fw-bold text-center text-md-start">Último break de la Expo</h5>
                            <p className="text-center text-md-start">Descanso junto a Disertantes, colegas del hospital y estudiantes del cent 35.</p>
                            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center align-items-md-start mb-4">
                                <button
                                    className="btn-custom"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-3"
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                        <ModalSecondSectionB />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSectionNews;
