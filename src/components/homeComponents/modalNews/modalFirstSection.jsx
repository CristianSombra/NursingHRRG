import React from "react";
import { Image } from "cloudinary-react";
import imagesHome from '@/components/cloudinary/home/imagesHome';
import '../home.css'

const ModalFirstSection = () => {
    return(
            <div className="modal fade" id="modal-1" tabIndex="-1" aria-hidden="true" aria-labelledby="aria-modal-1" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fw-bold">
                                Primer Expo Enfermería 2024
                            </h4>
                        </div>
                        <div className="modal-body">
                            <Image 
                                cloudName="nursingStaff" 
                                publicId={imagesHome.card1} 
                                className="img-fluid img-custom-home-modal" 
                                alt=""
                            />
                            <div className="mt-4" 
                            style={{textAlign: 'justify'}}
                                >
                                <p>
                                    Nos complace haber realizado <strong>la primera exposición del año</strong>, donde destacados profesionales y licenciados de servicios como Enfermería de Partos, Terapia Intensiva Pediátrica, Terapia Intensiva de Adultos, Guardia Central de Emergencias, Neonatología, Infectología, Consultorios Externos, Hemodiálisis, Oncología, entre otros, compartieron valiosas experiencias y actualizaciones en enfermería. 
                                </p>
                                <p>
                                    Fue un evento enriquecedor que promovió el intercambio de conocimientos y el <strong>fortalecimiento de nuestra comunidad profesional</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ModalFirstSection;
