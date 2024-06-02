
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CorreoBoton from '../utils/correoBoton';


function AboutMe() {
    const handleDownload = () => {

        const url = '/utils/archivo/CVLeiderJuanEstebanRolonBurgos.pdf';
        console.log(url);
        const fileName = 'CVLeiderJuanEstebanRolonBurgos.pdf';

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        console.log(a);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className='d-flex flex-column text-center h-100 justify-content-center align-items-center'>
            <div className='col-12'>
                <img
                    className='img-aboutme pt-3 pb-4'
                    src='https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png'
                    alt='profile'
                >
                </img>
            </div>
            <div className='col-lg-12 pb-lg-4'>
                <p className="ttl-aboutme">
                    LEIDER JUAN ESTEBAN ROLON BURGOS
                </p>
                <p className="desc-aboutme mx-lg-5 mx-xs-2">
                    Soy Soporte Tecnico, Analista y Desarrollador de Sistemas
                    de Información, cuento con un año y cinco meses de experiencia desarrollando
                    proyectos web con el patrón de diseño Modelo Vista Controlador, creando y
                    actualizando paginas web con WordPress, WooComerce y Shopify.
                    También tengo experiencia en Soporte Tecnico y conocimientos básicos
                    en Google Tag Manager, Google Analytics, Google Data Studio
                </p>
                <div className='align-self-center d-flex justify-content-center align-items-center'>
                    <button type="button" className="btn btn-primary btn-aboutme btn-lg mx-4" onClick={handleDownload}>
                        Hoja de Vida
                        <FontAwesomeIcon icon={faDownload} className='px-2' />
                    </button>
                    <CorreoBoton
                        destinatario="rolonleiderjuanesteban@gmail.com"
                        asunto="Interesado en tu CV"
                        cuerpo="Aqui puedes agregar la informacion"

                    />
                </div>
            </div>
        </div>
    )
} export default AboutMe;

