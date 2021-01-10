import { UserTransformerContract } from '../contracts/transformers/user';

export const UserTransformer: UserTransformerContract = () => {
  return {
    transform: (user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      status: user.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }),
  };
};
