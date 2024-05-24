import React from "react";
import { Image } from "cloudinary-react";
import imagesHome from '@/components/cloudinary/home/imagesHome';
import '../home.css'

const ModalSecondSectionA = () => {
    return(
            <div className="modal fade" id="modal-2" tabIndex="-1" aria-hidden="true" aria-labelledby="aria-modal-2" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fw-bold">
                                Colaboración
                            </h4>
                        </div>
                        <div className="modal-body">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card2} className="img-fluid" alt=""/>
                            <p 
                            className="mt-4" 
                            style={{textAlign: 'justify'}}
                            >
                                Expresamos nuestro sincero <strong>agradecimiento</strong> al Colegio Público de Profesionales de Enfermería, a la Asociación Trabajadores de la Sanidad Argentina filial Tierra del Fuego <strong>(ATSA)</strong>, y a la Asociación de Trabajadores del Estado Seccional Rio Grande <strong>(ATE)</strong> por la <strong>colaboración</strong> para brindar un servicio excepcional. Su apoyo va más allá de lo material, inspirándonos a fortalecer nuestra labor en beneficio de la comunidad de enfermería.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const ModalSecondSectionB = () => {
    return(
            <div className="modal fade" id="modal-3" tabIndex="-1" aria-hidden="true" aria-labelledby="aria-modal-3" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fw-bold">
                                Último break de la Expo
                            </h4>
                        </div>
                        <div className="modal-body">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card3} className="img-fluid" alt=""/>
                            <p 
                            className="mt-4" 
                            style={{textAlign: 'justify'}}
                            >
                                En el último break, tuvimos el privilegio de compartir un <strong>momento de camaradería y colaboración</strong> junto a destacados <strong>disertantes</strong>, <strong>colegas profesionales</strong> y <strong>estudiantes del Cent35</strong>. Fue una oportunidad invaluable para intercambiar ideas, experiencias y fortalecer nuestra red de contactos en el campo de la enfermería. Estos encuentros no solo enriquecen nuestro conocimiento, sino que también fortalecen los lazos que nos unen como comunidad profesional. Es inspirador ver cómo juntos podemos avanzar hacia un futuro de excelencia en el cuidado de la salud. <strong>Agradecemos a todos los participantes</strong> por su compromiso y dedicación, y esperamos seguir colaborando juntos en futuros eventos y proyectos.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}



export {
    ModalSecondSectionA,
    ModalSecondSectionB
}
