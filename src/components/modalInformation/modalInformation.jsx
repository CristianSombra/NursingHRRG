import React from "react";
import { Image } from "cloudinary-react";
import clock from "../cloudinary/components/modalInformation/imagesModalInfo";

export const ModalInformationA = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-4"
                tabIndex="-1"
                aria-hidden="true"
                aria-labelledby="aria-modal-4"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle">Comunicado</h5>
                    </div>
                        <div className="modal-body text-center">
                            <Image cloudName="nursingStaff" publicId={clock} className="my-3" style={{ borderRadius: '0' }} />
                            <h4>Todavía no hay capacitaciones.</h4>
                            <h6 className="text-muted my-3">Se está trabajando con la oficina de divisón de docencia e investigación.</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export const ModalQuestionLAR = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-5"
                tabIndex="-1"
                aria-hidden="true"
                aria-labelledby="aria-modal-5"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle fw-bold">Licencia Anual Reglamentaria</h5>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-5">
                                En caso de excedido los 15 días el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export const ModalQuestionLEI = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-6"
                tabIndex="-1"
                aria-hidden="true"
                aria-labelledby="aria-modal-6"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle fw-bold">Licencia Especial Invierno</h5>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-5">
                                En caso de excedido la semana el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export const Modal14F = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-7"
                tabIndex="-1"
                aria-hidden="true"
                aria-labelledby="aria-modal-7"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle fw-bold">Licencia 14F</h5>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-3">
                                Deben solicitarse con <strong>48 hs de anticipación</strong> al Jefe Inmediato (Jefe del Servicio) y esperar su confirmación para ser autorizadas.
                            </h5>
                            <h5 className="my-3">
                                Pueden ser dadas de baja por <strong>razones de servicio.</strong>
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export const Modal14H = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-8"
                tabIndex="-1"
                aria-hidden="true"
                aria-labelledby="aria-modal-8"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle fw-bold">Licencia 14H</h5>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-3">
                                Deben solicitarse con <strong>48 hs de anticipación</strong> al Jefe Inmediato (Jefe del Servicio) y esperar su confirmación para ser autorizadas.
                            </h5>
                            <h5 className="my-3">
                                Pueden ser dadas de baja por <strong>razones de servicio.</strong>
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}