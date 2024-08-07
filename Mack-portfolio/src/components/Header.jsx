import { Link, useLocation } from 'react-router-dom';


function Header() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <ul className="nav nav-tabs">
    <h2 className='header'>Mackenzie Moore</h2>
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Skills"
           className={currentPage === '/Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
    </>
  );
}

export default Header;
