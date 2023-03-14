import { ProfileList } from './profile';
import { Statistics } from './statistic';
import { Friends } from './friends';
import { TransactionHistory } from './transaction';
import { Layout } from './layout';
import { GlobalStyle } from './GlobalStyles';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <ProfileList user={user} />
      <Statistics title="Upload stats" data={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
