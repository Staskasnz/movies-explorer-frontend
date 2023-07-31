import './Register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Register(props) {

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
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
        props.onRegister({
            name: formValue.name,
            password: formValue.password,
            email: formValue.email
        });
    }

    return (
        <div className="register">
            <Link to="/" className="register__logo button"><img src={logo} alt="Логотип" /></Link>
            <h3 className="register__title">Добро пожаловать!</h3>
            <form className="register__form" name="registerForm" onSubmit={handleSubmit}>
                <p className="register__label">Имя</p>
                <input type="text" name="name" minLength="2" maxLength="30"
                    id="name" className="register__input" required onChange={handleChange} />
                <span className="name-error popup__input-error"></span>
                <p className="register__label">E-mail</p>
                <input type="email" name="email" className="register__input"
                    minLength="2" maxLength="30" required onChange={handleChange} />
                <span className="email-error popup__input-error"></span>
                <p className="register__label">Пароль</p>
                <input type="password" name="password" minLength="2" maxLength="30"
                    id="link" className="register__input" required onChange={handleChange} />
                <span className="password-error popup__input-error"></span>
                <button className="register__save-button button" type="submit">Зарегистрироваться</button>
                <Link to='/signin' className="register__to-login link">Уже зарегистрированы?
                    <span className="register__login-blue"> Войти</span>
                </Link>
            </form>
        </div>
    )
}

export default Register;