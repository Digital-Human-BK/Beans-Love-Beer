import { Link, NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/'>
        Beans Love Beers
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='/favorites'
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
