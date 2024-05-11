import React from "react";
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'

const SecondSectionNews = () => {
    return(
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 my-3">
                            <img src={card1} className="img-fluid img-custom-home" alt="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h5 className="fw-bold text-center text-md-start">Ingreso a planta</h5>
                            <p className="text-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos?</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 my-3">
                            <img src={card2} className="img-fluid img-custom-home" alt="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h5 className="fw-bold text-center text-md-start">Actividad en el RAM</h5>
                            <p className="text-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSectionNews;