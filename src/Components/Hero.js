import React from "react";
import '../Css/Hero.css';
function Hero(){
    return(
        <section id="hero-recibimiento">
            <div className="hero-recibimiento--parte-izquierda">
                <p>Club de 
                    <svg viewBox="0 0 600 300">
                        <symbol id="s-text">
                            <text text-anchor="middle" x="34%" y="50%" dy=".35em">Programacion</text>
                        </symbol>
                        <use className="text" href="#s-text"></use>
                        <use className="text" href="#s-text"></use>
                        <use className="text" href="#s-text"></use>
                        <use className="text" href="#s-text"></use>
                        <use className="text" href="#s-text"></use>
                    </svg> 
                UCuenca</p>
            </div>
            <div className="hero-recibimiento--parte-derecha">
                <span className="hero-icono-programador"></span>
            </div>
        </section>
    );
}
export { Hero };