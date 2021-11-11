import React from "react";
import ReactDOM from "react-dom";
import '../Css/Footer.css';
function Footer(){
    return ReactDOM.createPortal(
        <footer>
            <div id="seccion-animada-participar">
                <span id="icono-participar"></span>
                <a href="/#">Unirme</a>
            </div>
            <nav id="menu-principal">
                <ul>
                    <li><a href="/#">Contacto</a></li>
                    <li><a href="/#">¿Porque unirme?</a></li>
                </ul>
            </nav>
        </footer>,
        document.getElementById('footer')
    );
}
export { Footer };