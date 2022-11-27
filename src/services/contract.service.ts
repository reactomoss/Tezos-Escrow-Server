import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { Network, Contracts } from 'configs';

export interface MintDto {}

const Tezos = new TezosToolkit(Network.RPC);
Tezos.setProvider({
  signer: new InMemorySigner(Network.AdminPrivateKey),
});

export const reward = async (address: string) => {
  const contract = await Tezos.contract.at(Contracts.Escrow);
  const op = await contract.methods.withdraw(address, 2).send();
  const tx = await op.confirmation(1);
  console.log('Reward result:', tx);
  return true;
};
