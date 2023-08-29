import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ handleIsSubmiting, isChecked, isPreloader, handleCheckedChange, handleInputChange, toggleChecked, savedMovieCards, searchInput, notFound, searchError, deleteMovie, onSearchMovies, isSubmitting }) {

    return (
        <main className="content">
            <SearchForm
                onSearchMovies={onSearchMovies}
                searchInput={searchInput}
                handleInputChange={handleInputChange}
                isSubmitting={isSubmitting}
                handleIsSubmiting={handleIsSubmiting}
            />
            <FilterCheckbox
                isChecked={isChecked}
                handleCheckedChange={handleCheckedChange}
                toggleChecked={toggleChecked}
            />
            <div className="line line_opacity-color"></div>
            <MoviesCardList cards={savedMovieCards} deleteMovie={deleteMovie} />
            {isPreloader && <Preloader />}
            {notFound && <p className="not-found">Ничего не найдено</p>}
            {searchError && <p className="search-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
                Подождите немного и попробуйте ещё раз</p>}
        </main>
    )

}

export default SavedMovies;