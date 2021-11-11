import React from "react";
import '../Css/Hero.css';
function Hero(){
    return(
        <section id="hero-recibimiento">
            <div className="hero-recibimiento--parte-izquierda">
                <p>Club de Programacion UCuenca</p>
            </div>
            <div className="hero-recibimiento--parte-derecha">
                <span className="hero-icono-programador"></span>
            </div>
        </section>
    );
}
export { Hero };