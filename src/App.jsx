import { Profile, FriendList, TransactionHistory } from 'components';

import profile from 'data/profile.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile data={profile} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
