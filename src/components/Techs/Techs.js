import './Techs.css';

function Techs() {

    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="line"></div>
            <div className="techs__flexbox">
                <h3 className="techs__count-title">7 технологий</h3>
                <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__box">
                    <div className="techs__element">HTML</div>
                    <div className="techs__element">CSS</div>
                    <div className="techs__element">JS</div>
                    <div className="techs__element">React</div>
                    <div className="techs__element">Git</div>
                    <div className="techs__element">Express.js</div>
                    <div className="techs__element">mongoDB</div>
                </div>
            </div>
        </section>
    )
}

export default Techs;