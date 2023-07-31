import './Login.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

import { useState } from "react";

function Login(props) {

    const [formValue, setFormValue] = useState({
        password: '',
        email: ''
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onLogin({
            password: formValue.password,
            email: formValue.email
        });

    }

    return (
        <div className="login">
            <Link to="/" className="login__logo button"><img src={logo} alt="Логотип" /></Link>
            <h3 className="login__title">Рады видеть!</h3>
            <form className="login__form" name="registerForm" onSubmit={handleSubmit}>
                <p className="register__label">E-mail</p>
                <input type="email" name="email" className="login__input" value={formValue.email}
                    minLength="2" maxLength="30" required onChange={handleChange} />
                <p className="register__label">Пароль</p>
                <input type="password" name="password" minLength="2" maxLength="30" value={formValue.password}
                    id="password" className="login__input" required onChange={handleChange} />
                <button className="login__save-button button" type="submit">Войти</button>
                <Link to='/signup' className="register__to-login link">Ещё не зарегистрированы?
                    <span className="register__login-blue"> Регистрация</span>
                </Link>
            </form>
        </div>
    )
}

export default Login;