import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import useWalletCtx from '../../hooks/useWalletCtx';

import styles from './Navigation.module.css';
import Wallet from '../UI/Wallet';

const Navigation = () => {
  const { isConnected,showWallet, toggleWallet } = useWalletCtx();

  return (
    <>
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
            {isConnected && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ''
                    }
                    to='/catalog'
                  >
                    Catalog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ''
                    }
                    to='/favorites'
                  >
                    Favorites
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <button onClick={toggleWallet} className={styles.wallet}>
                <i className='fa-solid fa-wallet'></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {showWallet && <Wallet toggleWallet={toggleWallet} />}
    </>
  );
};

export default Navigation;
