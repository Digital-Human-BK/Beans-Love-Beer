import errorImg from '../../assets/error.png';

import styles from './ErrorMsg.module.css';

const ErrorMsg = ({ children }) => {
  return (
    <div className={styles.container}>
      <h2>Oops! Something went wrong...</h2>
      <img src={errorImg} alt="no beer found" />
      <p className={styles.error}>{children}</p>
    </div>
  );
};

export default ErrorMsg;
