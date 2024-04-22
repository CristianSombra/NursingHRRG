import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="container">
            <div className="row d-flex justify-content-center text-center">
                            <div className="col-auto">
                                <a 
                                    href="https://www.instagram.com/cristiansombra87/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                >
                                    <div>
                                        <FontAwesomeIcon icon={faInstagram} className="icon-custom" />
                                    </div>
                                </a>   
                            </div>
                            <div className="col-auto">
                                <a
                                    href="https://www.linkedin.com/in/cristiansombra"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                >
                                <div>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="icon-custom" />
                                </div>
                                </a>   
                            </div>
                            <div className="col-auto">
                                <a 
                                    href="https://github.com/CristianSombra" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                >
                                <div>
                                    <FontAwesomeIcon icon={faGithub} className="icon-custom" />
                                </div>
                                </a>
                            </div>
                        </div>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-12 col-md-3 my-2">
                        <figcaption style={{fontWeight: 'bold'}}>Realizado por Cristian Sombra 2024</figcaption>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;