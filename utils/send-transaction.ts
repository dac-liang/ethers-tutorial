import { ethers, utils } from 'ethers';

const SendTransaction = async (
  senderName,
  recipientAddr,
  sendValue = '0.001'
) => {
  const network = process.env.LOCAL_URL;
  const connection = new ethers.providers.JsonRpcProvider(network);
  // const network = 'rinkeby';
  // const connection = ethers.getDefaultProvider(network, {
  //   etherscan: process.env.ETHERSCAN_API,
  //   infura: process.env.INFURA_PROJECT_NAME,
  // });

  const gasPrice = connection.getGasPrice();
  const senderKey: string = process.env.SENDER_PRIVATE_KEY || '';
  const sender = new ethers.Wallet(senderKey);
  const signer = sender.connect(connection);

  const recipient = {
    address: recipientAddr,
  };
  const tx = {
    from: sender.address,
    to: recipient.address,
    value: ethers.utils.parseUnits(sendValue, 'ether'),
    gasPrice: gasPrice,
    gasLimit: utils.hexlify(100000), // 100gwei
    nonce: connection.getTransactionCount(sender.address, 'latest'),
  };

  const transaction = await signer.sendTransaction(tx);
  console.log(senderName);
  console.log(transaction);
};

export { SendTransaction };
