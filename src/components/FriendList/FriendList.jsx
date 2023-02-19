import PropTypes from "prop-types";
import { FriendListContainer, FriendItem, FriendStatus, FriendIMG, FriendName } from './FriendList.styled';
export { FriendList };

function FriendListItem({avatar, name, isOnline}) {
    return (
        <FriendItem>
            <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
            <FriendIMG src={avatar} alt="User avatar" width="48" height="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}

function FriendList({friends}) {
    return (
        <FriendListContainer>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </FriendListContainer>
    )
}

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

