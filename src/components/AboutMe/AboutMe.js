import './AboutMe.css';
import photo from '../../images/photo.jpg'

function AboutMe() {

    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="line"></div>
            <div className="about-me__box">
                <div className="about-me__info-box">
                    <h3 className="about-me__name">Станислав</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 31 год</p>
                    <p className="about-me__info">Я живу в Санкт-Петербурге, закончил факультет менеджмента КиТа. Работаю консультантом по фотоуслугам.
                        Мечтаю стать профессиональным веб разработчиком, создавать интересные и полезные продукты.</p>
                    <a href="https://github.com/Staskasnz" className="about-me__github link" target="_ blank">Github</a>

                </div>
                <img src={photo} alt="Мое фото" className="about-me__photo" />
            </div>
        </section>
    )
}

export default AboutMe;