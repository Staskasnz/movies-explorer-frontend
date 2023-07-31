import "./MoviesCard.css"
import { useState } from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

    const location = useLocation();

    const [isLiked, setIsLiked] = useState(false);

    function handleSaveButton() {
        setIsLiked(!isLiked);
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{props.card.title}</h2>
                    <p className="movie-card__duration">{props.card.duration}</p>
                </div>
                <img src={props.card.screenshot} alt="" className="movie-card__screenshot" />
                <button className={`movie-card__save-button button 
                ${isLiked ? 'movie-card__save-button_active button' : ''}
                ${location.pathname === '/saved-movies' && 'movie-card__delete-button button'}
                 `} onClick={handleSaveButton}>
                    {location.pathname === '/saved-movies' ? '' : isLiked ? '' : 'Сохранить'}
                </button>
            </div>
        </>
    );
}

export default MoviesCard;