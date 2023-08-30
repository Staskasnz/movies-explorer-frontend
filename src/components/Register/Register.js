import './Register.css'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../validateForm';

function Register(props) {

    const { values, handleChange, errors, isValid, apiError, setApiErrorFoo } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
            props.handleIsSubmiting(true);
            props.onRegister({
                name: values.name,
                password: values.password,
                email: values.email
            });
            setApiErrorFoo(true);
        }
    }

    return (
        <div className="register">
            <Link to="/" className="register__logo button"><img src={logo} alt="Логотип" /></Link>
            <h3 className="register__title">Добро пожаловать!</h3>
            <form className="register__form" name="registerForm" onSubmit={handleSubmit}>
                <p className="register__label">Имя</p>
                <input disabled={props.isSubmitting} type="text" name="name" minLength="2" maxLength="30"
                    id="name" className="register__input" required onChange={handleChange} />
                <p className="register__error input-error">{errors.name}</p>
                <p className="register__label">E-mail</p>
                <input disabled={props.isSubmitting} type="email" name="email" className="register__input"
                    minLength="2" maxLength="30" required onChange={handleChange} />
                <p className="register__error input-error">{errors.email}</p>
                <p className="register__label">Пароль</p>
                <input disabled={props.isSubmitting} type="password" name="password" minLength="5" maxLength="30"
                    id="link" className="register__input" required onChange={handleChange} />
                <p className="register__error input-error">{errors.password}</p>
                <button disabled={props.isSubmitting} className={`${isValid ? "register__save-button" : "register__save-button_inactive"}  button`}
                    type="submit">Зарегистрироваться</button>
                <p className="register__request-error input-error">{apiError ? props.requestError : ''}</p>
                <Link to='/signin' className="register__to-login link">Уже зарегистрированы?
                    <span className="register__login-blue"> Войти</span>
                </Link>
            </form>
        </div>
    )
}

export default Register;