import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main.js';
import Movies from './Movies.js';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import Login from './Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';
import { moviesApi } from '../utils/MoviesApi.js';
import { mainApi } from '../utils/MainApi.js';
import ProtectedRoute from './ProtectedRoute.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function App() {

  const [searchInput, setSearchInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [savedMoviesLoaded, setSavedMoviesLoaded] = useState(true);
  const [savedCards, setSavedCards] = useState([]);
  const [isPreloader, setIsPreloader] = useState(false);
  const [notFound, searchNotFound] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [requestError, setRequestError] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    setSearchInput(location.pathname === '/saved-movies' ? '' : localStorage.getItem('searchInput'));
    setIsChecked(location.pathname === '/saved-movies' ? false : JSON.parse(localStorage.getItem('isChecked')));
    setCards(location.pathname === '/saved-movies' ? savedCards || [] : JSON.parse(localStorage.getItem('cards')) || []);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (isChecked) {
        if (cards) {
          const cardsShort = cards.filter((movie) => movie.duration <= 40);
          if (cardsShort) {
            setCards(cardsShort)
            if (cardsShort.length === 0) {
              searchNotFound(true);
            }
          }
        }
      } else {
        setCards(JSON.parse(localStorage.getItem('cards')));
      }
    }
    if (location.pathname === "/saved-movies") {
      if (isChecked) {
        if (savedCards) {
          const cardsShort = savedCards.filter((movie) => movie.duration <= 40);
          if (cardsShort) {
            setSavedCards(cardsShort)
            if (cardsShort.length === 0) {
              searchNotFound(true);
            }
          }
        }
      } else {
        setCards(getSavedMovies());
      }
    }
  }, [isChecked]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.checkJwt(token)
        .then((userInfo) => {
          setCurrentUser(userInfo);
          setLoggedIn(true);
          getSavedMovies();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setCheckingAuth(false);
        })
    } else {
      setCheckingAuth(false);
      setSavedMoviesLoaded(false)
    }
  }, [location.pathname]);

  function handleRegister(userData) {
    mainApi.signUp(userData)
      .then(() => {
        handleLogin(userData)
        setRequestError('');
      })
      .catch((err) => {
        console.log(err.data.message);
        setRequestError(err.data.message);
      })
  }

  function handleLogin(userData) {
    mainApi.signIn(userData)
      .then((data) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        navigate('/movies', { replace: true });
        setRequestError('');
      })
      .catch((err) => {
        console.log(err);
        setRequestError(err.data.message);
      })
  }

  function handleSearchMovies({ input }) {
    setCards([]);
    searchNotFound(false);
    setIsPreloader(true);
    setSearchError(false);

    moviesApi.getCardInfo()
      .then((data) => {
        localStorage.setItem('searchInput', input);

        const inputFilter = data.filter((movie) => movie.nameRU.toLowerCase().includes(input.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(input.toLowerCase()));

        if (inputFilter.length === 0) {
          searchNotFound(true);
        } else {
          searchNotFound(false);
        }

        if (isChecked) {
          const inputFilterShort = inputFilter.filter((movie) => movie.duration <= 40);
          setCards(inputFilterShort);
          if (inputFilterShort.length === 0) {
            searchNotFound(true);
          }
        } else {
          setCards(inputFilter);
        }

        return inputFilter;
      })
      .then((inputFilter) => localStorage.setItem('cards', JSON.stringify(inputFilter)))
      .catch((err) => {
        setSearchError(true);
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      })
  }

  function handleSearchSavedMovies({ input }) {
    setSavedCards([]);
    searchNotFound(false);
    setIsPreloader(true);
    setSearchError(false);
    
    const inputFilter = savedCards.filter((movie) => movie.nameRU.toLowerCase().includes(input.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(input.toLowerCase()));

    if (inputFilter.length === 0) {
      searchNotFound(true);
    } else {
      searchNotFound(false);
    }

    if (isChecked) {
      const inputFilterShort = inputFilter.filter((movie) => movie.duration <= 40);
      setSavedCards(inputFilterShort);
      if (inputFilterShort.length === 0) {
        searchNotFound(true);
      }
    } else {
      setSavedCards(inputFilter);
    }
    setIsPreloader(false);
  }

  function getSavedMovies() {
    mainApi.getSavedCard()
      .then((data) => setSavedCards(data))
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setSavedMoviesLoaded(false))
  }

  function handleSaveMovie(card) {
    mainApi.savedCard(card)
      .then((newCard) => setSavedCards([newCard, ...savedCards]))
      .catch((err) => {
        console.log(err.message);
      })
  }

  function hanleDeleteMovie(card) {
    mainApi.deleteSavedCard(card._id)
      .then(() => {
        setSavedCards((state) => state.filter(item => item._id !== card._id));
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  function handleUpdateUser(data) {
    mainApi.updateUser(data)
      .then((data) => {
        setCurrentUser(data);
        setRequestError('');
      })
      .catch((err) => {
        console.log(err);
        setRequestError(err.data.message);
      });
  }

  function handleCheckedChange() {
    setIsChecked(!isChecked);
    if (location.pathname === "/movies") {
      localStorage.setItem('isChecked', JSON.stringify(!isChecked));
    }
  };

  function handleInputChange(input) {
    setSearchInput(input);
  }

  function toggleChecked(evt) {
    evt.preventDefault();
    setIsChecked(!isChecked);
    if (location.pathname === "/movies") {
      localStorage.setItem('isChecked', JSON.stringify(!isChecked));
    }
  };

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isChecked');
    localStorage.removeItem('searchInput');
    localStorage.removeItem('cards');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  return (
    <div className={`${location.pathname === '/' ? 'page__container_main' : 'page__container'}`}>
      <CurrentUserContext.Provider value={currentUser}>

        <Header loggedIn={loggedIn} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute element={Movies}
            saveMovie={handleSaveMovie}
            onSearchMovies={handleSearchMovies}
            movieCards={cards}
            savedCards={savedCards}
            isChecked={isChecked}
            isPreloader={isPreloader}
            handleCheckedChange={handleCheckedChange}
            handleInputChange={handleInputChange}
            toggleChecked={toggleChecked}
            searchInput={searchInput}
            notFound={notFound}
            searchError={searchError}
            loggedIn={loggedIn}
            checkingAuth={checkingAuth}
            deleteMovie={hanleDeleteMovie}
            savedMoviesLoaded={savedMoviesLoaded}
          />
          } />
          <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies}
            savedMovieCards={savedCards}
            isChecked={isChecked}
            isPreloader={isPreloader}
            onSearchMovies={handleSearchSavedMovies}
            handleCheckedChange={handleCheckedChange}
            handleInputChange={handleInputChange}
            toggleChecked={toggleChecked}
            searchInput={searchInput}
            notFound={notFound}
            searchError={searchError}
            loggedIn={loggedIn}
            checkingAuth={checkingAuth}
            deleteMovie={hanleDeleteMovie}
            savedMoviesLoaded={savedMoviesLoaded}
          />} />
          <Route path="/profile" element={<ProtectedRoute element={Profile}
            loggedIn={loggedIn}
            checkingAuth={checkingAuth}
            savedMoviesLoaded={savedMoviesLoaded}
            onUpdate={handleUpdateUser}
            requestError={requestError}
            handleSignOut={handleSignOut}
          />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} requestError={requestError} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} requestError={requestError} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {['/movies', '/saved-movies', '/'].includes(location.pathname) && <Footer />}

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
