import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const CorreoBoton = ({ destinatario, asunto, cuerpo }) => {
    const handleCorreoClick = () => {
        const correoURL = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.location.href = correoURL;
    };

    return (
        <button type="button" className="btn btn-secondary btn-lg btn-aboutme"
            onClick={handleCorreoClick}>Contactar
            <FontAwesomeIcon icon={faEnvelope} className='px-2' />
        </button>
    );
};

export default CorreoBoton;