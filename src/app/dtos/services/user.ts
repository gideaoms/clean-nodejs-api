import { UserModel } from '../../models/user';

export type CreateProps = {
  userData: Pick<UserModel, 'email' | 'name' | 'password'>;
};
