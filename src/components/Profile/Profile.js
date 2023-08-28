import './Profile.css'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import React, { useEffect, useState } from 'react';
import { useFormWithValidation } from '../validateForm';


function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, apiError, setApiErrorFoo, setValuesFoo, setIsValidFoo } = useFormWithValidation();
    const [activeSaveButton, setActiveSaveButton] = useState(false);

    useEffect(() => {
        setValuesFoo((prevValues) => ({
            ...prevValues,
            name: currentUser.name,
            email: currentUser.email,
        }));
    }, []);

    function handleSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
            props.onUpdate({
                name: values.name,
                email: values.email
            });
            setIsValidFoo(false)
            setActiveSaveButton(false)
            setApiErrorFoo(true);
        }
    }

    function handleEditButton() {
        setActiveSaveButton(true);
    }

    return (
        <>
            <form className="profile" onSubmit={handleSubmit}>
                <h3 className="profile__title">Привет, {currentUser.name}!</h3>
                <div className="profile__name-container">
                    <p className="profile__error input-error">{errors.name}</p>
                    <p className="profile__name">Имя</p>
                    <input disabled={!activeSaveButton} type="text" name="name" className="profile__username" onChange={handleChange} value={values.name} />
                </div>
                <div className="line line_opacity-color line_short"></div>
                <div className="profile__email-container">
                    <p className="profile__error input-error">{errors.email}</p>
                    <p className="profile__email">E-mail</p>
                    <input disabled={!activeSaveButton} type="email" name="email" className="profile__useremail" onChange={handleChange} value={values.email} />
                </div>
                <button className={`${activeSaveButton ? "profile__save-button_visible" : "profile__save-button_unvisible"} 
                                ${isValid ? "" : "profile__save-button_inactive"} button`} type="submit">Сохранить</button>
                <button className={`profile__edit-button ${activeSaveButton ? "profile__edit-button_inactive" : ""} button`} onClick={handleEditButton}>Редактировать</button>
                <p className="profile__request-error input-error">{apiError ? props.requestError : ''}</p>
                <button className={`profile__exit-button ${activeSaveButton ? "profile__exit-button_inactive" : ""} button`} onClick={props.handleSignOut}>Выйти из аккаунта</button>
            </form>
            <div className={`profile__sucsess-message ${props.isSuccess && "profile__sucsess-message_visible"}`}>Успешно</div>
        </>
    )
}

export default Profile;