import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css'
import React from 'react';
import icon from '../../images/icon.svg';

function BurgerMenu({ isMenuOpen, handleMenuToggle }) {

    const location = useLocation();

    return (
        <div className='burger'>
            <div className={`burger__overlay-color ${isMenuOpen ? 'burger__overlay-color_active' : ''}`}></div>
            <svg className={`burger__button ${isMenuOpen ? 'rotate' : ''}`} viewBox="0 0 100 100" onClick={handleMenuToggle}>
                <path className={`line burger__top ${isMenuOpen ? 'burger__top_active' : ''}`} d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                <path className={`line burger__middle ${isMenuOpen ? 'burger__middle_active' : ''}`} d="m 30,50 h 40" />
                <path className={`line burger__bottom ${isMenuOpen ? 'burger__bottom_active' : ''}`} d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
            </svg>
            <div className={`burger__overlay ${isMenuOpen ? 'burger__overlay_active' : ''}`}>
                <nav className={`burger__menu ${isMenuOpen ? 'burger__menu-open' : ''}`}>
                    <div className="burger__routes">
                        <Link to={'/'} className={`burger__to-main button`
                        }>Главая</Link>
                        <Link to="/movies" className={`burger__movies button 
                        ${location.pathname === '/movies' ? 'burger__movies_active' : ''}`}>Фильмы</Link>
                        <Link to="/saved-movies" className={`burger__saved-movies button
                        ${location.pathname === '/saved-movies' ? 'burger__saved-movies_active' : ''}`}>Сохранённые фильмы</Link>
                    </div>
                    <div className="burger__account-container">
                        <Link to="/profile" className="burger__account-link button">Аккаунт</Link>
                        <Link to="/profile" className="burger__icon-link button">
                            <img src={icon} alt="" className="burger__icon" />
                        </Link>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default BurgerMenu;