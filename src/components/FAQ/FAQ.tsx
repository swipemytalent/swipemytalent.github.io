import styles from './FAQ.module.scss';

const faqs = [
  {
    q: 'Est-ce vraiment gratuit ?',
    a: 'Oui, SwipeMyTalent est 100% gratuit pour tous les membres. Il n’y a ni frais cachés, ni commission sur les échanges : l’entraide est au cœur de la plateforme.'
  },
  {
    q: 'Dois-je être freelance confirmé ?',
    a: 'Non, la plateforme est ouverte à tous les niveaux : débutants, confirmés, étudiants, autodidactes ou passionnés. Chacun peut trouver sa place et progresser à son rythme.'
  },
  {
    q: 'Comment rejoindre la communauté ?',
    a: 'Il suffit de cliquer sur le bouton principal ou de t’inscrire via la page d’accueil. L’inscription est rapide et ne prend que quelques minutes.'
  },
  {
    q: 'Puis-je proposer plusieurs compétences ?',
    a: 'Oui, tu peux proposer et rechercher autant de compétences que tu veux, dans tous les domaines du digital. La diversité des profils fait la richesse de la communauté.'
  },
  {
    q: 'Comment se passent les échanges ?',
    a: 'Tu entames la conversation et proposes un échange directement via la plateforme. Après validation par les deux parties, vous collaborez (visio, chat, ressources). À la fin, chacun peut laisser un avis.'
  },
  {
    q: 'Y a-t-il un système d’avis ou de recommandations ?',
    a: 'Oui, après chaque échange, tu peux laisser un feedback à ton partenaire. Les recommandations reçues sont visibles sur ton profil et valorisent ton engagement.'
  },
  {
    q: 'Est-ce que je peux trouver des missions ou des partenaires ?',
    a: 'SwipeMyTalent, c’est : échangez vos compétences, développez vos projets. La plateforme d’entraide entre freelances et créateurs permet d’obtenir des recommandations et d’élargir son réseau professionnel, dans un esprit de confiance et de collaboration.'
  },
  {
    q: 'La plateforme est-elle sécurisée ?',
    a: 'Oui, la confidentialité de tes données et la bienveillance de la communauté sont des priorités. L’équipe technique met tout en œuvre pour garantir un environnement sûr et respectueux lors du développement et de l’évolution de la plateforme.'
  }
];

const FAQ = () => (
  <section className={styles.faq}>
    <h2 className={styles.title}>
      <span className={styles.blue}>F</span><span className={styles.orange}>AQ</span>
    </h2>
    <div className={styles.list}>
      {faqs.map((f, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.q}>{f.q}</div>
          <div className={styles.a}>{f.a}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ; 