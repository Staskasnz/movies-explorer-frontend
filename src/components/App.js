import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import movieCards from "../context/movieCards";
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

function App() {

  const location = useLocation();
  const [cards, setCards] = useState(movieCards);

  function handleRegister(inputData) {
    console.log(inputData);
  }

  function handleLogin(inputData) {
    console.log(inputData);
  }

  return (
    <div className={`${location.pathname === '/' ? 'page__container_main' : 'page__container'}`}>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies movieCards={movieCards} />} />
        <Route path="/saved-movies" element={<SavedMovies movieCards={movieCards} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register onRegister={handleRegister} />} />
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {['/movies', '/saved-movies', '/'].includes(location.pathname) && <Footer />}

    </div>
  );
}

export default App;
