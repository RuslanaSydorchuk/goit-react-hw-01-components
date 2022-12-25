import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistic from './Statistics/Statistics';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
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
      
    </div>
  );
};
