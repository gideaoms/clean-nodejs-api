import { UserService } from '../../app/services/user';
import { userRepository } from '../repositories/user';
import { encryptProvider } from '../providers/encrypt';

export const userService = UserService({ userRepository, encryptProvider });
