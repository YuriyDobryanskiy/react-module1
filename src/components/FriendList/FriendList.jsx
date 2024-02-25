import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.cards}>
        {friends.map(item => (
          <li key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
