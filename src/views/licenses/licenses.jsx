import React from "react";
import PageTransition from '../../components/pagetransition/pagetransition';
import ScrollTop from '../../components/scrolltop/scrollTop';
import './licenses.css';
import { TitleLicenses, LicensesFirstSection, LicensesSecondSection } from "@/components/index";

const Licenses = () => {
    return(
        <PageTransition>
            <div className="container-fluid container-licenses">
            
                {/* Sección titulo */}
                <section className="container-fluid container-licenses-title position-relative">
                    <TitleLicenses/>
                </section>

                {/* Sección Licencias 1 */}
                <section className="container">
                    <LicensesFirstSection/>
                </section>

                {/* Sección licencias 2 */}
                <section className="container">
                    <LicensesSecondSection/>
                </section>

                <ScrollTop/>
            </div>
        </PageTransition>
    );
};

export default Licenses;