import React from "react";

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
                            <h3>Todavía no hay capacitaciones.</h3>
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