import { UserServiceContract } from '../contracts/services/user';

export const UserService: UserServiceContract = ({ userRepository, encryptProvider }) => {
  return {
    create: async ({ userData }) => {
      const { name, email, password } = userData;
      const hashedPassword = await encryptProvider.hash({ plain: password });
      const createdUser = await userRepository.create({
        email,
        name,
        password: hashedPassword,
        status: 'active',
      });
      return createdUser;
    },
  };
};
