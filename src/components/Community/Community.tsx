import { useEffect, useState } from 'react';
import styles from './Community.module.scss';
import icone2 from '../../assets/icone2.ico';

const timeline = [
  { label: 'Juillet', text: 'Lancement', icon: '🚀' },
  { label: 'Août', text: 'Premiers échanges', icon: '🤝' },
  { label: 'Septembre', text: 'Système d’évaluation', icon: '⭐' },
];

const MEMBERS = 34;

const Community = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = MEMBERS;
    if (start === end) return;
    const incrementTime = 30;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.communitySection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.icon}>
            <img src={icone2} alt="Icône communauté" width={140} height={140} />
          </span>
          <div className={styles.badge}>Bêta ouverte</div>
          <div className={styles.title}>Une communauté en pleine éclosion</div>
          <div className={styles.desc}>
            SwipeMyTalent, c’est déjà 16 talents inscrits (freelances, développeurs, créatifs...).<br />
            Nous construisons ensemble un espace d’entraide, d’échanges et de collaboration.
          </div>
          <div className={styles.counter}><span className={styles.counterNumber}>{count}</span> membres déjà inscrits</div>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div className={styles.timelineItem} key={i}>
                <span className={styles.timelineIcon}>{item.icon}</span>
                <span className={styles.timelineLabel}>{item.label}</span>
                <span className={styles.timelineText}>{item.text}</span>
              </div>
            ))}
          </div>
          <a
            href="https://discord.gg/ZWuuhBmg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Rejoindre la communauté
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community; 