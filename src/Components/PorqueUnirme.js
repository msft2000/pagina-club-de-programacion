import React from "react";
import imgCampamento from "../assets/imgs/imagen-campamento.webp";
import impTutor_Estudiante from "../assets/imgs/pair-programing.png";
import imgEntrenamiento from "../assets/imgs/entrenamiento-programacion.jpeg";
import '../Css/PorqueUnirme.css'
function PorqueUnirme(){
    return(
        <section id="porqueUnirme">
            <h2>¿Porque deberias unirte?</h2>
            <div className="porqueUnirme--tarjetas-info">
                <img src={imgCampamento} alt="campamentos con charlas de codigo"/>
                <h3>Campamentos con charlas de código</h3>
                <p>Se realizan por paseos por fin de ciclo con el fin de socializar ideas y compartir experiencias. </p>
            </div>
            <div className="porqueUnirme--tarjetas-info">
                <img src={impTutor_Estudiante} alt="campamentos con charlas de codigo"/>
                <h3>Tutor-estudiante</h3>
                <p>Cooperación entre estudiantes de ciclos mayores con estudiantes de ciclos menos.</p>
            </div>
            <div className="porqueUnirme--tarjetas-info">
                <img src={imgEntrenamiento} alt="campamentos con charlas de codigo"/>
                <h3>Entrenamiento</h3>
                <p>Cada cierto tiempo se dara clases de programacion y posterior se asignará un reto a un grupo, para después socializar la solución del ejercicio.</p>
            </div>
        </section>
    );
}
export { PorqueUnirme };