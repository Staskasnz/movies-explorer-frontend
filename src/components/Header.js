import { useLocation } from 'react-router-dom';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderMovie from './HeaderMovie/HeaderMovie';

function Header(props) {

  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? props.loggedIn ? <HeaderMovie /> : <HeaderMain /> : ''}
      {['/movies', '/saved-movies', '/profile'].includes(location.pathname) && <HeaderMovie />}
    </>
  )
}

export default Header;