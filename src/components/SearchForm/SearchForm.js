import './SearchForm.css';

function SearchForm() {

    return (
        <form className="search-form">
            <input type="text" className="search-form__input" placeholder="Фильм" required />
            <button className="search-form__button button">Найти</button>
        </form>
    )
}

export default SearchForm;