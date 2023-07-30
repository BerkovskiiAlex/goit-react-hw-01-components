import '../styles/_reset.scss';
import 'modern-normalize';
import { styled } from 'styled-components';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <Container>
      <div>
        <Profile user={user} />
        <Statistics title={'Upload stats'} stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
