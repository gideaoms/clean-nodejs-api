import { CreateResult } from '../../dtos/validators/user';

export type UserValidatorContract = () => {
  create: (opts: any) => Promise<CreateResult | Error>;
};
