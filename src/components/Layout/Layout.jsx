
import styles from './Layout.module.css';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
