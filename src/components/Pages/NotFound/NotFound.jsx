import styles from './NotFound.module.css';

const NotFound = () => {
  return <div className={styles.container}>
    <p className={styles.code}>404</p>
    <h2 className={styles.message}>Oops, page not found</h2>
  </div>
}

export default NotFound;