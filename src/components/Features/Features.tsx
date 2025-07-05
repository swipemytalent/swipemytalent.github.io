import styles from './Features.module.scss';

const features = [
  {
    icon: '🤝',
    title: 'Échangez vos services',
    desc: 'Collaborez avec d’autres freelances, créateurs ou passionnés pour avancer sur vos projets respectifs. Ici, pas de compétition : chacun partage ses compétences, apprend des autres et fait grandir ses idées dans un esprit d’entraide. Les échanges sont variés : entraide technique, retours créatifs, ou co-création de projets, tout le monde y trouve sa place et progresse à son rythme.',
    mini: 'Ex : Alice aide Bob à améliorer son site en React, Bob crée une identité visuelle pour Alice, et tous deux progressent plus vite grâce à l’échange. Parfois, un simple coup de main débouche sur une vraie collaboration ou une nouvelle amitié professionnelle.'
  },
  {
    icon: '⭐',
    title: 'Obtenez des recommandations',
    desc: 'Faites reconnaître vos compétences et votre sérieux grâce aux retours et avis authentiques de la communauté. Chaque échange ou collaboration te permet de recevoir un feedback constructif, qui valorise ton profil et t’aide à progresser. Les recommandations sont visibles par tous et renforcent ta crédibilité auprès de futurs partenaires ou clients.',
    mini: 'Ex : Après avoir aidé un membre sur un projet, tu reçois une recommandation visible sur ton profil, qui rassure les futurs partenaires ou clients. Plus tu participes, plus ton profil inspire confiance et attire de nouvelles opportunités.'
  },
  {
    icon: '🌐',
    title: 'Développez votre réseau',
    desc: 'Rencontrez d’autres freelances, échangez, créez des liens et grandissez ensemble. Participez à des discussions, des projets collaboratifs ou des sessions d’entraide pour élargir votre cercle professionnel et humain. Ici, chaque rencontre peut devenir une opportunité d’apprendre, de s’entraider ou de lancer de nouveaux projets ensemble.',
    mini: 'Ex : Tu participes à un échange, tu découvres de nouveaux profils, tu restes en contact pour progresser ensemble, et parfois tu trouves même un partenaire pour lancer un projet ou t’entraider sur le long terme. Le réseau se construit naturellement, au fil des échanges et des collaborations.'
  }
];

const Features = () => (
  <section className={styles.features}>
    <h2 className={styles.title}>
      <span className={styles.blue}>Les avantages de </span>
      <span className={styles.orange}>SwipeMyTalent</span>
    </h2>
    <div className={styles.grid}>
      {features.map((f, i) => (
        <div className={styles.card} key={i}>
          <span className={styles.icon}>{f.icon}</span>
          <div className={styles.cardTitle}>{f.title}</div>
          <div className={styles.cardDesc}>{f.desc}</div>
          <div className={styles.cardMini}>{f.mini}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 