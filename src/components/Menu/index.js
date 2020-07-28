import React from 'react';
import Logo from '../../assets/img/lucasflix.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from './../Button'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="LucasFlix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;