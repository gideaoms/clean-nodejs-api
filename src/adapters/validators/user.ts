import * as yup from 'yup';
import { UserValidatorContract } from '../../app/contracts/validators/user';

export const UserValidatorYupAdapter: UserValidatorContract = () => {
  return {
    create: async (data) => {
      try {
        const schema = yup.object().shape({
          name: yup.string().required(),
          email: yup.string().email().required(),
          password: yup.string().min(6).max(10).required(),
        });
        const validatedData = await schema.validate(data);
        return validatedData;
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          return new Error(err.message);
        }
        throw err;
      }
    },
  };
};
