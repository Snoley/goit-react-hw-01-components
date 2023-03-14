import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendsUl = styled.ul`
  list-style: none;
  margin-bottom: 77px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const OnLine = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.isOnline ? 'green' : 'gray')};
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const Friends = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id}>
          <OnLine isOnline={isOnline}></OnLine>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </FriendsItem>
      ))}
    </FriendsUl>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]).isRequired,
    })
  ).isRequired,
};

