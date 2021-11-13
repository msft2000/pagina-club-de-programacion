import React from "react";
import "../Css/QuienPuedeEntrar.css";
import logoUcuenca from "../assets/imgs/logo-universidad-de-cuenca.png";
function QuienPuedeEntrar(){
    return(
        <section id="quienPuedeEntrar">
            <h2 id="quienPuedeEntrar-titulo"> </h2>
            <div className="quienPuedeEntrar-container">
                <img src={logoUcuenca} alt="imagen universidad de cuenca"/>
                <div className="quienPuedeEntrar-info">
                    <h2>Cualquier estudiante de la Universidad de Cuenca es bienvenido, sin importar la carrera o facultad</h2>
                </div>
            </div>
        </section>
    );
}
export { QuienPuedeEntrar }