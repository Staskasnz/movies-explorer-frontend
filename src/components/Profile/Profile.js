import './Profile.css'

function Profile() {


    return (
        <div className="profile">
            <h3 className="profile__title">Привет, Станислав!</h3>
            <div className="profile__name-container">
                <p className="profile__name">Имя</p>
                <p className="profile__username">Станислав</p>
            </div>
            <div className="line line_opacity-color line_short"></div>
            <div className="profile__email-container">
                <p className="profile__email">E-mail</p>
                <p className="profile__useremail">Staskasnz@mail.ru</p>
            </div>
            <button className="profile__edit-button button">Редактировать</button>
            <button className="profile__exit-button button">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;