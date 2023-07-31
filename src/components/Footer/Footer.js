import './Footer.css'

function Footer() {

    return (
        <footer className="footer">
            <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="line line_opacity-color"></div>
            <div className="footer__flexbox">
                <p className="footer__year">© 2023</p>
                <div className="footer__link-container">
                    <a href="https://practicum.yandex.ru" className="footer__link link" target="_ blank">Яндекс.Практикум</a>
                    <a href="https://github.com/Staskasnz?tab=repositories" className="footer__link link" target="_ blank">Github</a>
                </div></div>
        </footer>
    )
}

export default Footer;
