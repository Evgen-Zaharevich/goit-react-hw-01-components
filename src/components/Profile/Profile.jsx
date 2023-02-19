import PropTypes from "prop-types";
import { ProfileCard, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity, icon } from './Profile.styled';
import { HiLocationMarker } from 'react-icons/hi';

export { Profile };


function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
          width={150}
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location><HiLocationMarker style={icon} />{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}