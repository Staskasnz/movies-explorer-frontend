import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';



function PageNotFound() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Перейти на одну страницу назад
  };

  return (
      <div className="not-found">
        <h3 className="not-found__title">404</h3>
        <p className="not-found__span">Страница не найдена</p>
        <button className="not-found__button button" onClick={goBack}>Назад</button>
      </div>
  )
}

export default PageNotFound; 