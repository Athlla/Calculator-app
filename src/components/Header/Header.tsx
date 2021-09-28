import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>calc</h1>
      <div className={styles.Theme}>
        <p className={styles.Text}>Theme</p>
        <div className={styles.Switch}>
          <div className={styles.OptionText}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <span className={styles.SwitchButton}>
            <span />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
