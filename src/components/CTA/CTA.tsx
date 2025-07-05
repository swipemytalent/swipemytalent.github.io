import styles from './CTA.module.scss';

const CTA = () => (
  <section className={styles.ctaSection}>
    <div className={styles.title}>Prêt à rejoindre la communauté ?</div>
    <div className={styles.desc}>Inscris-toi gratuitement et commence à échanger avec d'autres talents dès aujourd'hui.</div>
    <a href="#" className={styles.ctaBtn}>Rejoindre SwipeMyTalent</a>
  </section>
);

export default CTA; 