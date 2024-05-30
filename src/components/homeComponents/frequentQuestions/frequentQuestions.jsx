import React from "react";
import { Link } from "react-router-dom";

const FrequentQuestions = () => {
    return (
        <div>
            <div className="accordion" id="accordion">
                <div className="accordion-item accordion-custom">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button accordion-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ¿Qué debo hacer si tengo un accidente en mi lugar de trabajo?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Con cuanto tiempo de anticipación debo solicitar las LAR o LEI?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p>La <strong>Licencia Anual Reglamentaria</strong> (LAR) deben solicitarse con 15 días de anticipación independientemente de la <strong>fracción</strong> que se requiera. En caso de excedido los 15 días el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.</p>
                            <p className="my-3">
                                ✅ Podrá ser utilizada durante todo el año.
                            </p>
                            <p className="my-3">
                                🚫 No podrán adicionar en el día inmediato anterior ni posterior laborable de la Licencia Especial Invierno <strong>(LEI)</strong>.
                            </p>
                            
                            <p>Las <strong>Licencia Especial Invierno</strong> (LEI) deben solicitarse con una semana de anticipación. En caso de excedido la semana el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.</p>
                            <p className="my-3">
                                ✅ Podrá ser utilizada cualquier día de la semana, como menciona en en <strong>Artículo 6° del decreto 2024</strong>.
                            </p>
                            <p className="mt-3 mb-4">
                                🚫 No podrán adicionar en el día inmediato anterior ni posterior laborable a la LEI por razones particulares <strong>(art. 14F y 14H)</strong>, ni Licencia anual reglamentaria <strong>(LAR)</strong>.
                            </p>
                            <div className="text-center my-4">
                                <Link to="/licenses" className="btn-custom-secondary">
                                    Ir a Licencias
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Con cuanto tiempo de anticipación debo solicitar los artículos 14F y 14H?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="my-3">
                                ✅ Deben solicitarse con <strong>48 hs de anticipación</strong> al Jefe Inmediato (Jefe del Servicio) y esperar su confirmación para ser autorizadas.
                            </p>
                            <p className="my-3">
                                👉 Pueden ser dadas de baja por <strong>razones de servicio.</strong>
                            </p>
                            <div className="text-center my-4">
                                <Link to="/licenses" className="btn-custom-secondary">
                                    Ir a Licencias
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            ¿Cuáles son los pasos para solicitar un permiso de salida?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            ¿Qué debo hacer en caso de llegar tarde a mi puesto de trabajo?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            ¿Cómo ingreso a mi GEN EXPEDIENTE?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingSix" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            ¿Que pasos debo realizar si no recuerdo mi usuario y contraseña de mi GEN EXPEDIENTE?
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingSeven" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            ¿Cómo ingreso a mi correo de ZIMBRA?
                        </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingEight" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            ¿Que pasos debo realizar si no recuerdo mi usuario y contraseña de mi correo de ZIMBRA?
                        </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingNine" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Nos disculpamos, se está <strong>trabajando en la respuesta</strong> con las oficinas correspondientes para brindar la información correcta, a la brevedad verás reflejada la respuesta a la consigna leída. Gracias por tu comprensión.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentQuestions;