import React from "react";
import PageTransition from '@/components/pagetransition/pagetransition';
import ScrollTop from '@/components/scrolltop/scrollTop';
import { CarouselNews, SectionNews, SectionFrequentQuestions, BannerHome } from "@/components/index";
import '@/components/homeComponents/home.css';



const Home = () => {

    return(
        <PageTransition>
            <div className="container-fluid container-home">
            
            {/* Sección Banner Home */}
            <section className="container container-banner">
                <BannerHome/>
            </section>
            
            
            {/* Sección Anuncios próximos */}
            <section className="container">
                <CarouselNews/>
            </section>


            {/* Sección Novedades */}
            <section className="container">
                <SectionNews/>
            </section>
            
            
            {/* Sección Preguntas frecuentes */}
            <section className="container">
                <SectionFrequentQuestions/>
            </section>

            <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Home;