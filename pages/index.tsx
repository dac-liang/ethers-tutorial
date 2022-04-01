import type { NextPage } from 'next';
import WithSubnavigation from '../components/NavBar';

const App: NextPage = () => {
  return (
    <div>
      <WithSubnavigation />
      <br />
    </div>
  );
};

export default App;
