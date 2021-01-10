import { UserModel } from '../../models/user';
import { CreateProps } from '../../dtos/repositories/user';

export type UserRepositoryContract = () => {
  create: (opts: CreateProps) => Promise<UserModel>;
};
