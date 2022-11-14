import styles from './PageControls.module.css'

const PageControls = ({onPageChange, page}) => {
  return (
    <div className={styles.container}>
      <button onClick={() => onPageChange(-10)}>Prev 10</button>
      <button onClick={() => onPageChange(-1)}>Prev</button>
      <span>Page: {page}</span>
      <button onClick={() => onPageChange(1)}>Next</button>
      <button onClick={() => onPageChange(10)}>Next 10</button>
    </div>
  )
}

export default PageControls