
import Footer from './Footer';
import styles from './Layout.module.css';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
