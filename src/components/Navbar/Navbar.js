import './Navbar.css';

function Navbar() {

    function scrollToElement() {
        document.getElementById('about-project')
        .scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="navbar">
            <button className="navbar__more-button" onClick={scrollToElement}>Узнать больше</button>
        </section>
    )
}

export default Navbar;