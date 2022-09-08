import ProfileList from './Profile/ProfileList';
import users from '../data/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileList items={users} />
    </div>
  );
};
