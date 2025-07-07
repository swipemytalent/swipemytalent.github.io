import styles from "./TargetAudience.module.scss";
import { FaLaptopCode, FaPaintBrush, FaBrain, FaChartBar, FaCloud, FaUsers } from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />, 
    title: "Développeurs web & mobile",
    desc: "Front-end, back-end, fullstack… Progresse avec d’autres devs passionnés."
  },
  {
    icon: <FaPaintBrush />, 
    title: "Designers UI/UX",
    desc: "Partage tes créations, collabore sur des interfaces et enrichis ton portfolio."
  },
  {
    icon: <FaBrain />, 
    title: "Product managers & Product owners",
    desc: "Échange sur la gestion de produit, la roadmap et l’agilité."
  },
  {
    icon: <FaChartBar />, 
    title: "Data analysts & Data scientists",
    desc: "Analyse, visualisation, IA… Rejoins la communauté data."
  },
  {
    icon: <FaCloud />, 
    title: "DevOps & Cloud engineers",
    desc: "Automatisation, cloud, CI/CD… Collabore sur l’infra et les outils."
  },
  {
    icon: <FaUsers />, 
    title: "Tous les freelances du digital",
    desc: "Quel que soit ton métier, tu trouveras ta place pour progresser et t’entraider."
  }
];

export default function TargetAudience() {
  return (
    <section className={styles.targetAudience}>
      <h1 className={styles.heroTitle}>
        <span className={styles.blue}>Bienvenue sur </span>
        <span className={styles.orange}>SwipeMyTalent</span>
      </h1>
      <h2>À qui s’adresse SwipeMyTalent&nbsp;?</h2>
      <div className={styles.subtitle}>La communauté des freelances et talents IT</div>
      <div className={styles.desc}>Développeur, designer, product manager, data analyst, DevOps ou tout autre profil tech : SwipeMyTalent t’aide à progresser, échanger et collaborer entre pairs du digital.</div>
      <div className={styles.actions}>
        <a href="https://swipemytalent.com/talents" target="_blank" rel="noopener noreferrer" className={styles.cta}>Rejoindre la plateforme</a>
        <a href="https://discord.gg/ZWuuhBmg" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>Rejoindre la communauté</a>
      </div>
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div className={styles.card} key={i}>
            <span className={styles.iconCircle}>{c.icon}</span>
            <div className={styles.title}>{c.title}</div>
            <div className={styles.cardDesc}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 