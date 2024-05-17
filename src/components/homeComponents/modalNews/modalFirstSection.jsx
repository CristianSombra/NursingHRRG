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
                            <h5 className="modal-title">Titulo del modal</h5>
                        </div>
                        <div className="modal-body">
                            <Image cloudName="nursingStaff" publicId={imagesHome.card1} className="img-fluid" alt=""/>
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

export default ModalFirstSection;
