import React from "react";
import ReactDOM from "react-dom";
import { GlobalContext } from "../Context";
import '../Css/Modal.css';
import logoAso from '../assets/imgs/logo-aso.png';
function Modal(){
    const { setShowModal } = React.useContext(GlobalContext);
    const cerrarModal = () => {
        setShowModal(false);
    }
    return ReactDOM.createPortal(
        <section id="modalInscripcion">
            <div className="modal-background">
                <div className="modalInscripcion-container">
                    <h2>Estas por el buen camino</h2>
                    <p>El siguiente cuestionario nos ayudara a medir tus habilidades actuales para ubicarte en el grupo que más te convenga y comenzar a aprender!</p>
                    <img src={logoAso} alt="logo aso"/>
                    <div className="botones-modal-inscripcion">
                        <button onClick={cerrarModal}><a href="/#">Ir a llenarlo</a></button>
                        <button onClick={cerrarModal}>Cerrar</button>
                    </div>
                </div>
            </div>
        </section>
        ,
    document.getElementById('modalInscripcion')
    );
}
export { Modal }