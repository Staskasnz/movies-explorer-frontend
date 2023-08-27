import './Login.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../validateForm';

function Login(props) {

    const { values, handleChange, errors, isValid, apiError, setApiErrorFoo } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onLogin({
            password: values.password,
            email: values.email
        });
        setApiErrorFoo(true);
    }

    return (
        <div className="login">
            <Link to="/" className="login__logo button"><img src={logo} alt="Логотип" /></Link>
            <h3 className="login__title">Рады видеть!</h3>
            <form className="login__form" name="registerForm" onSubmit={handleSubmit}>
                <p className="register__label">E-mail</p>
                <input type="email" name="email" className="login__input"
                    minLength="2" maxLength="30" required onChange={handleChange} />
                <p className="login__error input-error">{errors.email}</p>
                <p className="register__label">Пароль</p>
                <input type="password" name="password" minLength="5" maxLength="30"
                    id="password" className="login__input" required onChange={handleChange} />
                <p className="login__error input-error">{errors.password}</p>
                <button className={`${isValid ? "login__save-button" : "login__save-button_inactive"} button`}
                    type="submit">Войти</button>
                    <p className="login__request-error input-error">{apiError ? props.requestError : ''}</p>
                <Link to='/signup' className="register__to-login link">Ещё не зарегистрированы?
                    <span className="register__login-blue"> Регистрация</span>
                </Link>
            </form>
        </div>
    )
}

export default Login;