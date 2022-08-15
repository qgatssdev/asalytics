import styles from '../styles/loading.module.scss';

const Loader = () => {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading_spinner}></div>
    </div>
  );
};

export default Loader;
