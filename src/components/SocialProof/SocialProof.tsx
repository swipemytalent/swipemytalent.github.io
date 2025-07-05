import styles from './SocialProof.module.scss';

const testimonials = [
  {
    name: 'Julie, développeuse',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'J’ai trouvé mes premiers partenaires de projet grâce à SwipeMyTalent ! La communauté est super bienveillante.'
  },
  {
    name: 'Alex, créateur de contenu',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'On apprend tous les jours et on s’entraide vraiment. Je recommande à tous les freelances débutants !'
  }
];

const SocialProof = () => (
  <section className={styles.social}>
    <div className={styles.badge}>Bêta ouverte</div>
    <div className={styles.count}>Déjà 34 membres inscrits</div>
    <div className={styles.desc}>Rejoignez une communauté qui grandit chaque semaine !</div>
    <div className={styles.testimonials}>
      {testimonials.map((t, i) => (
        <div className={styles.testiCard} key={i}>
          <img src={t.avatar} alt={t.name} className={styles.avatar} />
          <div className={styles.quote}>“{t.quote}”</div>
          <div className={styles.name}>{t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default SocialProof; 