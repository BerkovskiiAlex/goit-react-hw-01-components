import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListUl,
  FriendListLi,
  FriendListSpan,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListLi key={id}>
          <FriendListSpan
            style={{
              backgroundColor: isOnline ? 'green' : 'red',
            }}
          >
            {/* {isOnline ? 'Online' : 'Offline'} */}
          </FriendListSpan>
          <img src={avatar} alt={name} width="48px" />
          <p>{name}</p>
        </FriendListLi>
      ))}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
