import './Promo.css';
import web from '../../images/web.svg';

function Promo() {

    return (
        <section className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета <span className="promo__title-nowrap">Веб-разработки.</span></h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <img src={web} alt="Планета WEB" className="promo__img" />
        </section>
    )
}

export default Promo;