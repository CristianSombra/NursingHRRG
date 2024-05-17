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
                            <h5 className="modal-title">Titulo del modal</h5>
                        </div>
                        <div className="modal-body">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card2} className="img-fluid" alt=""/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quos.
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
                            <h5 className="modal-title">Titulo del modal</h5>
                        </div>
                        <div className="modal-body">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card3} className="img-fluid" alt=""/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quos.
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
