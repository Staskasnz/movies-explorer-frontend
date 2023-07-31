import './Portfolio.css';

function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__link-box">
                <a href="https://github.com/Staskasnz/how-to-learn.git" className="portfolio__link link" target="_ blank">Статичный сайт</a>
                <a href="https://github.com/Staskasnz/how-to-learn.git" className="portfolio__arrow link" target="_ blank">↗</a>
            </div>
            <div className="line line_opacity-color"></div>
            <div className="portfolio__link-box">
                <a href="https://staskasnz.github.io/russian-travel/" className="portfolio__link link" target="_ blank">Адаптивный сайт</a>
                <a href="https://staskasnz.github.io/russian-travel/" className="portfolio__arrow link" target="_ blank">↗</a>
            </div>
            <div className="line line_opacity-color"></div>
            <div className="portfolio__link-box">
                <a href="https://github.com/Staskasnz/react-mesto-auth" className="portfolio__link link" target="_ blank">Одностраничное приложение</a>
                <a href="https://github.com/Staskasnz/react-mesto-auth" className="portfolio__arrow link" target="_ blank">↗</a>
            </div>
        </section>
    )
}

export default Portfolio;