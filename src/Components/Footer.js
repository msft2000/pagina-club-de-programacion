import React from "react";
import ReactDOM from "react-dom";
import { GlobalContext } from "../Context";
import '../Css/Footer.css';
function Footer(){
    const {setShowModal}=React.useContext(GlobalContext);
    const onClickUnirme = ()=> {
        setShowModal(true);
    }
    return ReactDOM.createPortal(
        <footer>
            <div id="seccion-animada-participar">
                <span id="icono-participar"></span>
                <p onClick={()=>onClickUnirme()}>Unirme</p>
            </div>
            <nav id="menu-principal">
                <ul>
                    <li><a href="/#contacto">Contacto</a></li>
                    <li><a href="/#porqueUnirme">¿Porque unirme?</a></li>
                </ul>
            </nav>
        </footer>,
        document.getElementById('footer')
    );
}
export { Footer };