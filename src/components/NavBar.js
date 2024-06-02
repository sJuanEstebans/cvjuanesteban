import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const NavBar = ({ handleSelect }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidepanel = () => {
        setIsOpen(!isOpen);

    };

    return (
        <>
            <div className="style-navbar bg-dark text-center" >
                <button className="btn mx-1" onClick={() => handleSelect(0)}>Sobre mí</button>
                <button className="btn mx-1" onClick={() => handleSelect(1)}>Habilidades</button>
                <button className="btn mx-1" onClick={() => handleSelect(2)}>Portafolio</button>
                <div onClick={toggleSidepanel}>
                    <FontAwesomeIcon icon={faBars} className="openbtn" onClick={toggleSidepanel} />
                </div>

            </div>
            <div className={`sidepanel ${isOpen ? 'open' : ''}`}>
                <a className="closebtn" onClick={toggleSidepanel}>&times;</a>
                <div className='d-flex flex-column'>
                    <button className="btn mx-1" onClick={() => { handleSelect(0); toggleSidepanel(); }}>Sobre mí</button>
                    <button className="btn mx-1" onClick={() => { handleSelect(1); toggleSidepanel(); }}>Habilidades</button>
                    <button className="btn mx-1" onClick={() => { handleSelect(2); toggleSidepanel(); }}>Portafolio</button>
                </div>
            </div>
        </>

    )

};
export default NavBar;