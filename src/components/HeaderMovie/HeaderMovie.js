import { Link, useLocation } from 'react-router-dom';
import './HeaderMovie.css'
import logo from '../../images/logo.svg';
import icon from '../../images/icon.svg';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function HeaderMovie(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const location = useLocation();

    return (
        <>
            <header className="header-movie">
                <Link to="/" className="header__logo button"><img src={logo} alt="Логотип" /></Link>
                <div className="header-movie__routes">
                    <Link to="/movies" className={`header-movie__movies button 
                    ${location.pathname === '/movies' ? 'header-movie__movies_active' : ''}`}>Фильмы</Link>
                    <Link to="/saved-movies" className={`header-movie__saved-movies button
                    ${location.pathname === '/saved-movies' ? 'header-movie__saved-movies_active' : ''}`}>Сохранённые фильмы</Link>
                </div>
                <div className="header-movie__account-container">
                    <Link to="/profile" className="header-movie__account-link button">Аккаунт</Link>
                    <Link to="/profile" className="header-movie__icon-link button">
                        <img src={icon} alt="" className="header-movie__icon" />
                    </Link>
                </div>
                <BurgerMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
            </header>
        </>
    )
}

export default HeaderMovie;