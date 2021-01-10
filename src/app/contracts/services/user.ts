import { CreateProps } from '../../dtos/services/user';
import { UserModel } from '../../models/user';
import { UserRepositoryContract } from '../repositories/user';
import { EncryptProviderContract } from '../providers/encrypt';

export type UserServiceContract = (opts: {
  userRepository: ReturnType<UserRepositoryContract>;
  encryptProvider: ReturnType<EncryptProviderContract>;
}) => {
  create: (opts: CreateProps) => Promise<UserModel | Error>;
};
