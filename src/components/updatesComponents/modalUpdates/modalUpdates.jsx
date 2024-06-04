import React from "react";
import { Image } from "cloudinary-react";
import imagesUpdates from "@/components/cloudinary/updates/imagesUpdates";

export const ModalDdiUpdate = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-ddi"
                tabIndex="-1"
                aria-hidden="true"
                aria-labelledby="aria-modal-ddi"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle">División docencia e investigación</h5>
                    </div>
                        <div className="modal-body text-center">
                            <Image cloudName="nursingStaff" publicId={imagesUpdates.ddi} className="img-fluid my-3" style={{ borderRadius: '0' }} />
                            <h4>Ciclo de encuentros - Programa Garrahan Federal</h4>
                            <h6 className="text-muted my-3">Actividades <strong>no aranceladas</strong>. Certificación por cada encuentro.</h6>
                            <h6 className="text-muted my-3"><strong>Modalidad:</strong> A distancia</h6>
                            <h6 className="text-muted my-3"><strong>Platarforma:</strong> Zoom</h6>
                            <div className="col-12 text-start my-4">
                            <h6 className="text-muted ">Cronograma:</h6>
                                <ul>
                                    <li>3 de Julio - Metas internacionales de seguridad.</li>
                                    <li>7 de Agosto - Comunicación efectiva.</li>
                                    <li>4 de septiembre - Medicación de Alto Riesgo (MAR).</li>
                                    <li>2 de octubre - Caídas, prevención, reporte y análisis. Mejora Continua.</li>
                                    <li>6 de noviembre - Logros y desafíos.</li>
                                </ul>
                            </div>


                            <h6 className="text-muted my-3"><strong>Destinado a:</strong> Equipos de salud de todo el país.</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
};