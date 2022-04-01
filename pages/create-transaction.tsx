import type { NextPage } from 'next';
import TransactionForm from '../components/TransactionForm';
import WithSubnavigation from '../components/NavBar';

const CreateTransactionPage: NextPage = () => {
  return (
    <div>
      <WithSubnavigation />
      <TransactionForm />
    </div>
  );
};

export default CreateTransactionPage;
