import PropTypes from 'prop-types';
// import css from './Profile.module.css';

export function FriendList({ avatar, name, isOnline, id }) {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string,
};
