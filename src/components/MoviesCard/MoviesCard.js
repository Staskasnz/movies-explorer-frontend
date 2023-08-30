import "./MoviesCard.css"
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

    const location = useLocation();

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies') {
            // Проверяем, что есть данные о сохраненных фильмах
            if (props.savedCards.length > 0) {
                // Проверяем, есть ли текущая карточка среди сохраненных
                const isitLiked = props.savedCards.some(savedCard => savedCard.movieId === props.card.id);
                setIsLiked(isitLiked);
            }
        }
    }, [props.savedCards, props.card, location.pathname]);


    function handleSaveButton() {
        setIsLiked(!isLiked);
        props.saveMovie(props.card);
    }
    //handleUnSaveButton и handleDeleteButton исользуются разные функции так как на разных роутах добавляются разные props.card
    function handleUnSaveButton() {
        const savedMovies = props.savedCards.find(movie => movie.movieId === props.card.id);
        props.deleteMovie(savedMovies);
        setIsLiked(false);
    }

    function handleDeleteButton() {
        props.deleteMovie(props.card);
        setIsLiked(!isLiked);
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{props.card.nameRU}</h2>
                    <p className="movie-card__duration">{`${Math.floor(props.card.duration / 60) > 0 ? `${Math.floor(props.card.duration / 60)} ч ${props.card.duration % 60} мин` : `${props.card.duration % 60} мин`}`}</p>
                </div>
                <a href={props.card.trailerLink} target="_blank" className="movie-card__link">
                    <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co${props.card.image.url}` : props.card.image}
                        alt="" className="movie-card__screenshot" />
                </a>
                <button className={`movie-card__save-button button 
                ${isLiked ? 'movie-card__save-button_active button' : ''}
                ${location.pathname === '/saved-movies' && 'movie-card__delete-button button'}
                 `} onClick={location.pathname === '/saved-movies' ? handleDeleteButton : isLiked ? handleUnSaveButton : handleSaveButton}>
                    {location.pathname === '/saved-movies' ? '' : isLiked ? '' : 'Сохранить'}
                </button>
            </div>
        </>
    );
}

export default MoviesCard;