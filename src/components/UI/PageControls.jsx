import styles from './PageControls.module.css';

const PageControls = ({ onPageChange, page, nextBtnDisabled }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={() => onPageChange(-1)}
        disabled={page - 1 < 1 ? true : false}
        className={page - 1 < 1 ? styles.disabled : ''}
      >
        <i className='fa-solid fa-chevron-left'></i> Prev
      </button>

      <span>
        Page: <strong>{page}</strong>
      </span>

      <button
        onClick={() => onPageChange(1)}
        disabled={nextBtnDisabled}
        className={nextBtnDisabled ? styles.disabled : ''}
      >
        Next <i className='fa-solid fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default PageControls;
