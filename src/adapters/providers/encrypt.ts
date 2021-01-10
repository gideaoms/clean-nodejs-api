import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import { EncryptProviderContract } from '../../app/contracts/providers/encrypt';

export const EncryptProviderBcryptjsAdapter: EncryptProviderContract = () => {
  return {
    random: ({ length = 4 } = {}) =>
      crypto.randomBytes(length).toString('hex').substring(length).toLowerCase(),

    compare: ({ plain, hashed }) => bcryptjs.compare(plain, hashed),

    hash: ({ plain, rounds = 8 }) => bcryptjs.hash(plain, rounds),
  };
};
