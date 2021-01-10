import { UserModel } from '../../models/user';

export type TransformResult = Pick<UserModel, 'id' | 'name' | 'email' | 'status' | 'createdAt' | 'updatedAt'>;
