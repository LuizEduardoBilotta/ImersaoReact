import React from 'react';
import { Link } from 'react-router-dom';
import LogoTechflix from '../../assets/images/LogoTechflix.png';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={LogoTechflix} alt="Logomarca Techflix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;