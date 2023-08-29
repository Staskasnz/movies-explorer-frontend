import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import {
    SCREEN_BREAKPOINT_SMALL, 
    SCREEN_BREAKPOINT_MEDIUM, 
    SCREEN_BREAKPOINT_LARGE,
    MOVIES_PER_PAGE_SMALL, 
    MOVIES_PER_PAGE_MEDIUM,
    MOVIES_PER_PAGE_LARGE,
    MOVIES_ADD_TWO,
    MOVIES_ADD_THREE,
} from '../../config/config.js';



function MoviesCardList(props) {

    const [visibleMovies, setVisibleMovies] = useState(12);

    const location = useLocation();

    useEffect(() => {
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth >= SCREEN_BREAKPOINT_LARGE) {
                    setVisibleMovies(MOVIES_PER_PAGE_LARGE);
                } else if (window.innerWidth >= SCREEN_BREAKPOINT_MEDIUM) {
                    setVisibleMovies(MOVIES_PER_PAGE_MEDIUM);
                } else if (window.innerWidth >= SCREEN_BREAKPOINT_SMALL) {
                    setVisibleMovies(MOVIES_PER_PAGE_SMALL);
                }
            }, 300);
        }

        let resizeTimeout;

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleShowMore() {
        setVisibleMovies(visibleMovies => visibleMovies + MOVIES_ADD_THREE)
        if (window.innerWidth >= SCREEN_BREAKPOINT_LARGE) {
            setVisibleMovies(visibleMovies + MOVIES_ADD_THREE);
        } else if (window.innerWidth >= SCREEN_BREAKPOINT_MEDIUM) {
            setVisibleMovies(visibleMovies + MOVIES_ADD_TWO);
        } else if (window.innerWidth >= SCREEN_BREAKPOINT_SMALL) {
            setVisibleMovies(visibleMovies + MOVIES_ADD_TWO);
        }
    }

    return (
        <>
            <section className="movie-list">
                {props.cards && props.cards.slice(0, visibleMovies).map((card) => {
                    return (
                        <MoviesCard
                            key={location.pathname === "/movies" ? card.id : card.movieId}
                            card={card}
                            saveMovie={props.saveMovie}
                            deleteMovie={props.deleteMovie}
                            savedCards={props.savedCards} />
                    )
                })}
            </section>
            <div className="movie-list__flexbox">
                {props.cards && (props.cards.length > visibleMovies) ? <button className="movie-list__button-steel button" onClick={handleShowMore}>Еще</button> : ''}
            </div>
        </>
    )
}

export default MoviesCardList;