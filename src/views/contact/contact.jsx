import React, { useState, useRef } from "react";
import PageTransition from '@/components/pagetransition/pagetransition';
import ScrollTop from '@/components/scrolltop/scrollTop';
import { motion } from 'framer-motion';
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import imgWhatsApp from '../../assets/whatsappcorporative.jpg';
import './contact.css';

const Contact = () => {

    const [formControl, setFormControl] = useState({
        from_name: "",
        email: "",
        message: "",
    });

    const serviceID = 'default_service';
    const templateID = 'template_j8y46ha';
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        // Validación el campo Email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formControl.email)) {
          // Mensaje de error si el correo electrónico no es válido
        toast.error("Por favor, introduce una dirección de correo electrónico válida.");
          return; // Detiene el envío del formulario si el correo electrónico no es válido
        }
    
        emailjs
        .sendForm(serviceID, templateID, form.current, "EKxeOba6KbWeMq6Rg") // Completar datos
        .then((result) => {
            console.log(result.text);
            resetForm();
            toast.success("!Tu Mensaje fue enviado con éxito!");
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje", error);
            toast.error("Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente más tarde.");
        });
    };
    
    const resetForm = () => {
        setFormControl({
            from_name: "",
            email: "",
            message: "",
        });
    };
    
    const handleChage = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
    
        let isValid = true;
        let errorMessage = "";
    
        // Validación el campo Nombre y Apellido
        if (name === "from_name") {
            if (/[^a-zA-Z\s]/.test(value) || value.length > 20) {
                isValid = false;
                errorMessage =
                    "El campo Nombre solo acepta letras y espacios, con un máximo de 20 caracteres.";
            }
        }

        // Validación el campo Mensaje
        if (name === "message") {
            if (value.length > 300) {
                isValid = false;
                errorMessage = "El campo Mensaje solo puede tener un máximo de 300 caracteres.";
            }
        }
    
        if (isValid) {
            // Actualizar el estado del formulario solo si la entrada es válida
            setFormControl({
                ...formControl,
                [name]: value,
            });
        } else {
            // Mostrar mensaje de error
            toast.error(errorMessage);
        }
    };


    return(
        <PageTransition>
            <div className="container-fluid container-contact">
            
            {/* Sección Titulo */}
            <section className="container-fluid container-contact-title position-relative">
                <div className="row my-5 d-flex justify-content-center text-center">
                    <div className="col-8 my-5">
                        <motion.div 
                            initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="orange-rectangle-contact"></motion.div>
                        <motion.div 
                            initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="blue-rectangle-contact"></motion.div>
                        <motion.h3 
                            initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                            animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="fw-bold my-3">
                                Contacto
                        </motion.h3>
                        <motion.p
                            initial={{opacity:0, filter: 'blur(4px)'}}
                            animate={{opacity:1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.6}}
                            >
                                Puedes contactarte con nosotros, si no eres personal del hospital pero eres un enfermero entusiasta puedes enviarnos un mensaje.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="container-contact">
                <div className="row my-5 d-flex justify-content-center mx-auto">
                    <div className="col-12 col-md-9 col-lg-7">
                        <form className="" onSubmit={sendEmail} ref={form}>
                            <motion.div 
                                className="row"
                                initial={{x: -50, opacity: 0, filter: 'blur(5px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.6, delay: 0.6}}
                                >
                                <h4 className="fw-bold">Escríbenos</h4>
                                <div className="col-12 col-md-12 col-lg-6 mt-5 position-relative">
                                    <input 
                                        type="text" 
                                        className="custom-input" 
                                        placeholder=" " 
                                        required
                                        value={formControl.from_name}
                                        onChange={handleChage}
                                        name="from_name"
                                        id="from_name"
                                        />
                                    <label htmlFor="nombre" className="custom-label fs-5 ms-2">Nombre</label>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 mt-5  position-relative">
                                    <input 
                                        type="text" 
                                        className="custom-input" 
                                        placeholder=" " 
                                        name="email"
                                        id="email"
                                        value={formControl.email}
                                        onChange={handleChage}
                                        required
                                        />
                                    <label htmlFor="email" className="fs-5 ms-2 custom-label">Email</label>
                                </div>
                                <div className="col-12 my-3 position-relative">
                                    <textarea 
                                        type="text"
                                        className="custom-input custom-area"
                                        placeholder=" " 
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        value={formControl.message}
                                        onChange={handleChage}
                                        required
                                        >
                                            
                                        </textarea>
                                        <label htmlFor="mensaje" className="custom-label fs-5 ms-2">Mensaje</label>
                                </div>
                                </motion.div>
                                <motion.div 
                                    className="col text-end"
                                    initial={{y: 50, opacity: 0, filter: 'blur(5px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.8, delay: 0.8}}
                                    >
                                    <button 
                                        type="submit" 
                                        className="p-3 btn-custom"
                                        id="button" 
                                        value="Send Email"
                                        > 
                                        Enviar 
                                    </button>
                                </motion.div>
                        </form>
                    </div>

                    <div className="col-12 mt-5 text-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <h4 className="fw-bold">Escríbenos</h4>
                            <div className="col-12 col-md-10 col-lg-4">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem itaque totam voluptate! Doloremque aliquam expedita earum quod? Libero, minus.</p>
                            </div>
                            <motion.div
                                initial={{x: 50, opacity: 0, filter: 'blur(5px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.6, delay: 0.6}}
                                className="col-12 col-md-10 col-lg-5"
                                >
                                <img src={imgWhatsApp} className="img-fluid my-3" style={{width: '60%'}} alt="" />
                            </motion.div>
                        </div>

                    </div>
                    
                </div>
            </section>

            <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Contact;