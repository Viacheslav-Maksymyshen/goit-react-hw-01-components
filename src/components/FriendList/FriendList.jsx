import PropTypes from 'prop-types';
import { FriendItem } from '../Friendtem/FriendItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
