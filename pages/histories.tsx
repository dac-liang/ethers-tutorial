import type { NextPage } from 'next';
import WithSubnavigation from '../components/NavBar';

const HistoryPage: NextPage = () => {
  return (
    <div>
      <WithSubnavigation />
      <a href="/">History</a>
    </div>
  );
};

export default HistoryPage;
