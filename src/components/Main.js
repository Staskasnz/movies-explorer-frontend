import React from 'react';
import Promo from './Promo/Promo.js'
import Navbar from './Navbar/Navbar';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe.js';

function Main(props) {

    return (
        <main className="content">
            <Promo />
            <Navbar />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}

export default Main;
