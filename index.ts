import 'dotenv/config';
import { ethers, utils } from 'ethers';

(async () => {
  const connection = new ethers.providers.JsonRpcProvider(
    'http://localhost:8545'
  );
  const gasPrice = connection.getGasPrice();
  const senderKey: string = process.env.SENDER_PRIVATE_KEY || '';
  const sender = new ethers.Wallet(senderKey);
  const signer = sender.connect(connection);

  // env で指定したアドレスまたは Random に作成
  // const recipient = { address: process.env.RECIPIENT_ADDRESS || '' };
  const recipient = ethers.Wallet.createRandom();
  const tx = {
    from: sender.address,
    to: recipient.address,
    value: ethers.utils.parseUnits('0.001', 'ether'),
    gasPrice: gasPrice,
    gasLimit: utils.hexlify(100000), // 100gwei
    nonce: connection.getTransactionCount(sender.address, 'latest'),
  };

  const transaction = await signer.sendTransaction(tx);
  console.log(transaction);
})();
