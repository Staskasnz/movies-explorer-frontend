import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';



function MoviesCardList(props) {

    const location = useLocation();

    const [visibleMovies, setVisibleMovies] = useState(12)

    function handleShowMore() {
        setVisibleMovies(visibleMovies => visibleMovies + 12)
    }

    return (
        <>
            <section className="movie-list">
                {props.cards.slice(0, visibleMovies).map((item) => {
                    return (
                        <MoviesCard card={item} />
                    )
                })}
            </section>
            <div className="movie-list__flexbox">
                {location.pathname === '/saved-movies' ? '' : <button className="movie-list__button-steel button" onClick={handleShowMore}>Еще</button>}
            </div>
        </>
    )
}

export default MoviesCardList;