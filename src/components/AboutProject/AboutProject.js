import './AboutProject.css';

function AboutProject() {

    return (
        <section className="about-project" id="about-project">
            <h2 to="/" className="about-project__title">О проекте</h2>
            <div className='line'></div>
            <div class="about-project__grid-container">
                <div>
                    <p class="about-project__grid-container__title">Дипломный проект включал 5 этапов</p>
                    <p class="about-project__grid-container__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div>
                    <p class="about-project__grid-container__title">На выполнение диплома ушло 5 недель</p>
                    <p class="about-project__grid-container__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div class="about-project__grid-container-2">
                <p class="about-project__grid-container-2__first-week">1 неделя</p>
                <p class="about-project__grid-container-2__four-week">4 недели</p>
                <p class="about-project__grid-container-2__programming">Back-end</p>
                <p class="about-project__grid-container-2__programming">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;