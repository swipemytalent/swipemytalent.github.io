import styles from './Header.module.scss';
import logoSMT from '../../assets/Logo-SMT (2).webp';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoRow}>
      <img src={logoSMT} alt="Logo" className={styles.logo} />
      <span className={styles.title}>
        <span className={styles.blue}>SwipeMy</span>
        <span className={styles.orange}>Talent</span>
      </span>
    </div>
  </header>
);

export default Header; 