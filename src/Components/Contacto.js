import React from "react";
import '../Css/Contacto.css';
import fotoPaulPresi from '../assets/imgs/paul-presi-aso.jpeg';
import fotoMateoFlores from '../assets/imgs/foto-mateo-flores.jpeg';
import fotoWhatApp from '../assets/imgs/png-whatsapp.png';
import fotoFacebook from '../assets/imgs/png-facebook.png';
import fotoTelegram from '../assets/imgs/png-telegram.png';
function Contacto(){
    return(
        <section id="contacto">
            <h2 className="contacto-titulo"> </h2>
            <div className="contenedor-tarjetas-contacto">
                <img alt="Fotos tarjetas de contacto" src={fotoPaulPresi}/>
                <div className="contenedor-info-contacto">
                    <h2 className="">Felipe Mendieta (Presidente ASO)</h2>
                    <p>Numero de Telefono: 0996960513</p>
                    <div className="iconos-tarjetas-contacto">
                        <a href="https://wa.me/593996960513"><img src={fotoWhatApp} alt="icono redes sociales" className="icono-whatsapp"/></a>
                        <a href="https://t.me/fmendietaz"><img src={fotoTelegram} alt="icono redes sociales" className="icono-telegram"/></a>
                        <a href="https://www.facebook.com/theGuardi4n"><img src={fotoFacebook} alt="icono redes sociales" className="icono-facebook"/></a>
                    </div>
                </div>
            </div>
            <div className="contenedor-tarjetas-contacto">
                <img alt="Fotos tarjetas de contacto" src={fotoMateoFlores}/>
                <div className="contenedor-info-contacto">
                    <h2>Mateo Flores (Miembro ASO)</h2>
                    <p>Numero de Telefono: 0986493415</p>
                    <div className="iconos-tarjetas-contacto">
                        <a href="https://wa.me/593986493415"><img src={fotoWhatApp} alt="icono redes sociales" className="icono-whatsapp"/></a>
                        <a href="https://t.me/mateofloresterreros"><img src={fotoTelegram} alt="icono redes sociales" className="icono-telegram"/></a>
                        <a href="https://www.facebook.com/mateo.floresterreros/"><img src={fotoFacebook} alt="icono redes sociales" className="icono-facebook"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { Contacto }