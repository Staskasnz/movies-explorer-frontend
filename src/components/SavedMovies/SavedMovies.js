import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies(props) {

    return (
        <main className="content">
            <SearchForm />
            <FilterCheckbox />
            <div className="line line_opacity-color"></div>
            <MoviesCardList
                cards={props.movieCards}
            />
            {/* <Preloader /> */}
        </main>
    )

}

export default SavedMovies;