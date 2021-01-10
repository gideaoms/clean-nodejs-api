import { UserModel } from '../../models/user';

export type CreateResult = Pick<UserModel, 'email' | 'name' | 'password'>;
