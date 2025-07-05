import styles from "./IntroHow.module.scss";
import { FaLaptopCode, FaPaintBrush, FaCamera, FaBrain, FaRegEdit, FaSearch, FaHandshake } from "react-icons/fa";

const audience = [
  { icon: <FaLaptopCode />, title: <>Développeurs <span className={styles.orange}>débutants</span></> },
  { icon: <FaPaintBrush />, title: <>Designers <span className={styles.orange}>freelances</span></> },
  { icon: <FaCamera />, title: <>Créateurs de <span className={styles.orange}>contenu</span></> },
  { icon: <FaBrain />, title: <>Passionnés qui veulent <span className={styles.orange}>apprendre</span> ensemble</> },
];

const steps = [
  { icon: <FaRegEdit className={styles.orangeIcon} />, title: <><span className={styles.orange}>1.</span> Je m’inscris gratuitement</>, desc: "Crée ton profil en quelques clics." },
  { icon: <FaSearch className={styles.orangeIcon} />, title: <><span className={styles.orange}>2.</span> Je trouve ou propose des compétences</>, desc: "Échange avec d’autres membres selon tes besoins." },
  { icon: <FaHandshake className={styles.orangeIcon} />, title: <><span className={styles.orange}>3.</span> Je collabore et progresse !</>, desc: "Participe à des projets, reçois des retours, développe ton réseau." },
];

export default function IntroHow() {
  return (
    <section className={styles.introHow}>
      <div className={styles.titlesRow}>
        <h2 className={styles.titleLeft}><span className={styles.blue}>À qui s’adresse </span><span className={styles.orange}>SwipeMyTalent&nbsp;?</span></h2>
        <h2 className={styles.titleRight}><span className={styles.blue}>Comment </span><span className={styles.orange}>ça marche&nbsp;?</span></h2>
      </div>
      <div className={styles.gridAudience}>
        {audience.map((a, i) => (
          <div className={styles.card} key={"audience-"+i}>
            <span className={styles.icon}>{a.icon}</span>
            <span className={styles.cardTitle}>{a.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.gridSteps}>
        {steps.map((s, i) => (
          <div className={styles.card} key={"step-"+i}>
            <span className={styles.icon}>{s.icon}</span>
            <div>
              <span className={styles.cardTitle}>{s.title}</span>
              <div className={styles.cardDesc}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 