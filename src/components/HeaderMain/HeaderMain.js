import { Link } from 'react-router-dom';
import './HeaderMain.css'
import logo from '../../images/logo.svg';

function HeaderMain(props) {

    return (
        <div>
            <header className="header">
                <Link to="/" className="header__logo button"><img src={logo} alt="Логотип" /></Link>
                <div className='header__sign-container'>
                    <Link to="/signup" className="header__singup-link button">Регистрация</Link>
                    <Link to="/signin" className="header__signin-bitton button">Войти</Link>
                </div>
            </header>

        </div>
    )
}

export default HeaderMain;