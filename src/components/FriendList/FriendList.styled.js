import styled from 'styled-components';

export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(106, 147, 176, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  height: 300px;
  gap: 10px;
  padding-bottom: 40px;
`;

export const FriendListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 150px;
  gap: 10px;
  background-color: white;
  box-shadow: 3px 3px 4px 1px gray;
  border-radius: 4px;
`;

export const FriendListSpan = styled.span`
  padding: 10px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
