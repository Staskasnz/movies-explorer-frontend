import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';



function MoviesCardList(props) {

    const [visibleMovies, setVisibleMovies] = useState(12);
    
    const location = useLocation();

    useEffect(() => {
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth >= 1280) {
                    setVisibleMovies(12);
                } else if (window.innerWidth >= 768) {
                    setVisibleMovies(8);
                } else if (window.innerWidth >= 320) {
                    setVisibleMovies(4);
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
        setVisibleMovies(visibleMovies => visibleMovies + 3)
        if (window.innerWidth >= 1280) {
            setVisibleMovies(visibleMovies + 3);
        } else if (window.innerWidth >= 768) {
            setVisibleMovies(visibleMovies + 2);
        } else if (window.innerWidth >= 320) {
            setVisibleMovies(visibleMovies + 1);
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