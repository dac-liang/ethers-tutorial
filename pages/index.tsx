import type { NextPage } from 'next';
import AuthButton from '../components/AuthButton';

const App: NextPage = () => {
  return (
    <div className="App">
      <a href="/">TOP</a>
      <br />
      <a href="/histories">履歴</a>
      <br />
      <AuthButton
        size="sm"
        colorScheme="pink"
        alignSelf="flex-end"
        onClick={() => {
          console.log('TODO');
        }}
      >
        Submit
      </AuthButton>
      <br />
    </div>
  );
};

export default App;
