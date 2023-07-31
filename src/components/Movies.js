import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {

    return (
        <main className="content">
            <SearchForm />
            <FilterCheckbox />
            <div className="line line_opacity-color"></div>
            <MoviesCardList cards={props.movieCards} />
            {/* <Preloader /> */}
        </main>
    )
}

export default Movies;