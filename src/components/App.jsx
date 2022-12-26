import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistic from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
      }}
    >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistic title = "Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
