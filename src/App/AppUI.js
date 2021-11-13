import React from "react";
import { Contacto } from "../Components/Contacto";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Modal } from "../Components/Modal";
import { PorqueUnirme } from "../Components/PorqueUnirme";
import { QuienPuedeEntrar } from "../Components/QuienPuedeEntrar";
import { GlobalContext } from "../Context";
function AppUI(){
    const { showModal } = React.useContext(GlobalContext);
    return(
        <React.Fragment>
            <Hero />
            <QuienPuedeEntrar />
            <PorqueUnirme />
            {showModal && <Modal />}
            <Contacto />
            <Footer />
        </React.Fragment>
    );
}
export { AppUI }