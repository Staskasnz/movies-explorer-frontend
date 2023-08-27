import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";

function Movies({ onSearchMovies, isChecked, isPreloader, handleCheckedChange, handleInputChange, toggleChecked, movieCards, searchInput, notFound, searchError, saveMovie, deleteMovie, savedCards }) {

    return (
        <main className="content">
            <SearchForm
                onSearchMovies={onSearchMovies}
                searchInput={searchInput}
                handleInputChange={handleInputChange}
            />
            <FilterCheckbox
                isChecked={isChecked}
                handleCheckedChange={handleCheckedChange}
                toggleChecked={toggleChecked}
            />
            <div className="line line_opacity-color"></div>
            <MoviesCardList cards={movieCards} savedCards={savedCards} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
            {isPreloader && <Preloader />}
            {notFound && <p className="not-found">Ничего не найдено</p>}
            {searchError && <p className="search-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
                Подождите немного и попробуйте ещё раз</p>}
        </main>
    )
}

export default Movies;