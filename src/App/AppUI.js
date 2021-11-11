import React from "react";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { PorqueUnirme } from "../Components/PorqueUnirme";
function AppUI(){
    return(
        <React.Fragment>
            <Hero />
            <PorqueUnirme />
            <Footer />
        </React.Fragment>
    );
}
export { AppUI }