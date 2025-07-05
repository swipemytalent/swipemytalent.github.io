import styles from './Hero.module.scss';

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.title}>
      <span className={styles.blue}>Bienvenue sur </span>
      <span className={styles.orange}>SwipeMyTalent</span>
    </h1>
  </section>
);

export default Hero; 