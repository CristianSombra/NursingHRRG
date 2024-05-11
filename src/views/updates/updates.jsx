import React from "react";
import PageTransition from '@/components/pagetransition/pagetransition';
import ScrollTop from '@/components/scrolltop/scrollTop';
import { BannerUpdates, BannerUpdatesMobile, TitleUpdates, TitleUpdatesMobile, UpdatesSections, DownloadFiles } from "@/components/index";
import '@/components/updatesComponents/updates.css';

const Updates = () => {
    return(
        <PageTransition>
            <div className="container-fluid container-updates">

                {/* Sección Banner Updates */}
                <section className="container">
                    <BannerUpdates/>
                </section>
            
                {/* Sección Título */}
                <section className="container">
                    <TitleUpdates/>
                </section>

                {/* Sección Título mobile */}
                <section className="container-fluid container-updates-title">
                    <TitleUpdatesMobile/>
                </section>

                {/* Sección Banner mobile */}
                <section className="container">
                    <BannerUpdatesMobile/>
                </section>
            
                {/* Sección Capacitaciones */}
                <div className="container">
                    <UpdatesSections/>
                </div>

                {/* Sección Materiales de utilidad */}
                <section className="container">
                    <DownloadFiles/>
                </section>
                
            <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Updates;