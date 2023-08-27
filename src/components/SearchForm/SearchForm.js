import { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {
    const [error, setError] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();
        if (props.searchInput === '') {
            setError('Нужно ввести ключевое слово');
        } else {
            props.onSearchMovies({
                input: props.searchInput,
            });
        }
    }

    function handleChange(evt) {
        props.handleInputChange(evt.target.value)
        if (evt.target.value !== '') {
            setError('');
        }
    }

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="search-form__input" placeholder="Фильм" onChange={handleChange} value={props.searchInput} />
                <button className="search-form__button button">Найти</button>
            </form>
            <p className="search-form__error input-error">{error && error}</p>
        </>
    )
}

export default SearchForm;