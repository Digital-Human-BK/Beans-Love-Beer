
import Footer from './Footer';
import styles from './Layout.module.css';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
