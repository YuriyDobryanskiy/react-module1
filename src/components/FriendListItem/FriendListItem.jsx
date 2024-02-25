import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.green : styles.red}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};
