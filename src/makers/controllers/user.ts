import { UserController } from '../../app/controllers/user';
import { userValidator } from '../validators/user';
import { userTransformer } from '../transformers/user';
import { userService } from '../services/user';
import { respondProvider } from '../providers/respond';

export const userController = UserController({
  userValidator,
  userTransformer,
  userService,
  respondProvider,
});
