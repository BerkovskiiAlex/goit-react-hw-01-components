import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileSection,
  DescriptionContainer,
  StatsContainer,
  StatsItems,
} from './Profile.styled.js';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props.user;
  const { followers, views, likes } = stats;
  return (
    <ProfileSection>
      <DescriptionContainer>
        <img
          src={avatar}
          alt={tag}
          style={{ borderRadius: '50%', width: '300px' }}
        />
        <h2>{username}</h2>
        <p>{tag}</p>
        <p>{location}</p>
      </DescriptionContainer>

      <StatsContainer>
        <StatsItems>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItems>
        <StatsItems>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItems>
        <StatsItems>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItems>
      </StatsContainer>
    </ProfileSection>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }),
  }),
};
