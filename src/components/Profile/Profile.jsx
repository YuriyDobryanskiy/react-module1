import styles from './Profile.module.css';

export const Profile = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.profileInfo}>
        <img src={data.img} alt={data.name} />
        <p className={styles.name}>{data.name}</p>
        <p className={styles.tag}>{data.tag}</p>
        <p className={styles.location}>{data.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.title}>Followers</span>
          <span className={styles.counter}>{data.stats.followers}</span>
        </li>
        <li>
          <span className={styles.title}>Views</span>
          <span className={styles.counter}>{data.stats.views}</span>
        </li>
        <li>
          <span className={styles.title}>Likes</span>
          <span className={styles.counter}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
