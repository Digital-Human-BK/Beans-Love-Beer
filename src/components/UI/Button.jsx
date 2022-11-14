import styles from './Button.module.css';

const Button = ({ children, callback, classes }) => {
  return (
    <button onClick={callback} className={`${styles.btn} ${styles[classes]}`}>
      {children}
    </button>
  );
};

export default Button;
