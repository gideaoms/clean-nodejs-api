import { UserModel } from '../../models/user';
import { TransformResult } from '../../dtos/transformers/user';

export type UserTransformerContract = () => {
  transform: (opts: UserModel) => TransformResult;
};
