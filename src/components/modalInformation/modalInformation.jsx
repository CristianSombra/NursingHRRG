import React from "react";
import { Image } from "cloudinary-react";
import clock from "../cloudinary/components/modalInformation/imagesModalInfo";

const ModalInformationA = () => {
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
                            <Image cloudName="nursingStaff" publicId={clock} className="image-fluid my-3" />
                            <h4>Todavía no hay capacitaciones.</h4>
                            <h6 className="text-muted my-3">Se está trabajando con la oficina de divisón de docencia e investigación</h6>
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

export default ModalInformationA;