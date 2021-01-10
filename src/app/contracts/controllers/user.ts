import { HttpRequest, HttpResponse } from '../http';
import { RespondProviderContract } from '../providers/respond';
import { UserServiceContract } from '../services/user';
import { UserTransformerContract } from '../transformers/user';
import { UserValidatorContract } from '../validators/user';

export type UserControllerContract = (opts: {
  respondProvider: ReturnType<RespondProviderContract>;
  userService: ReturnType<UserServiceContract>;
  userTransformer: ReturnType<UserTransformerContract>;
  userValidator: ReturnType<UserValidatorContract>;
}) => {
  create: (opts: HttpRequest) => Promise<HttpResponse>;
};
