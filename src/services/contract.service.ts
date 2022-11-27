import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { Network, Contracts } from '../configs';

export interface MintDto {}

const Tezos = new TezosToolkit(Network.RPC);
Tezos.setProvider({
  signer: new InMemorySigner(Network.AdminPrivateKey),
});

export const reward = async (address: string) => {
  const amount = 200000;//2000000;
  const contract = await Tezos.contract.at(Contracts.Escrow);
  const op = await contract.methods.withdraw(amount, address).send();
  const tx = await op.confirmation(1);
  console.log('Reward result:', tx);
  return true;
};
