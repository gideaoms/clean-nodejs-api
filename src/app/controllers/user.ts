import { UserControllerContract } from '../contracts/controllers/user';

export const UserController: UserControllerContract = ({
  respondProvider,
  userService,
  userTransformer,
  userValidator,
}) => {
  return {
    create: async ({ body }) => {
      const validatedDataOrError = await userValidator.create(body);
      if (validatedDataOrError instanceof Error) {
        const error = validatedDataOrError;
        return respondProvider.badRequest(error.message);
      }
      const userData = validatedDataOrError;
      const createdUserOrError = await userService.create({ userData });
      if (createdUserOrError instanceof Error) {
        const error = createdUserOrError;
        return respondProvider.badRequest(error.message);
      }
      const createdUser = createdUserOrError;
      const transformedUser = userTransformer.transform(createdUser);
      return respondProvider.created(transformedUser);
    },
  };
};
