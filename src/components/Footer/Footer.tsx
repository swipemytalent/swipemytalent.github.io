import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.brand}>SwipeMyTalent</div>
    <div className={styles.mission}>
      <em>SwipeMyTalent, la plateforme indépendante pour échanger, progresser et réussir ensemble.</em>
    </div>
    <div className={styles.socials}>
      <a href="https://discord.gg/ZWuuhBmg" target="_blank" rel="noopener noreferrer" aria-label="Discord">Discord</a>
      <a href="https://linkedin.com/in/TON_PROFIL_LINKEDIN" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
      <a href="mailto:contact@swipemytalent.com" aria-label="Email">Email</a>
      <a href="https://swipemytalent.com/talents" target="_blank" rel="noopener noreferrer" aria-label="Plateforme">Plateforme</a>
    </div>
    <div className={styles.copyright}>
      © {new Date().getFullYear()} SwipeMyTalent. Tous droits réservés.
    </div>
  </footer>
);

export default Footer; 