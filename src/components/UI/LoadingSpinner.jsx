import ReactDOM from 'react-dom';
import styles from './LoadingSpinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.bg}>
      <div className={styles['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.loading}>Loading</p>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <>
      {ReactDOM.createPortal(<Spinner />, document.getElementById('loading'))}
    </>
  );
};

export default LoadingSpinner;
