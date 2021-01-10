import { UserModel } from '../../models/user';

export type CreateProps = Pick<UserModel, 'name' | 'email' | 'status'> &
  Partial<Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>>;
