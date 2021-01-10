import {
  RandomProps,
  RandomResult,
  HashProps,
  HashResult,
  CompareProps,
  CompareResult,
} from '../../dtos/providers/encript';

export type EncryptProviderContract = () => {
  random: (props: RandomProps) => RandomResult;

  hash: (props: HashProps) => HashResult;

  compare: (props: CompareProps) => CompareResult;
};
