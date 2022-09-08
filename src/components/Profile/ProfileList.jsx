import Profile from './Profile';

const ProfileList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Profile
            username={item.username}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
