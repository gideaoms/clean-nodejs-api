import knex from '../../instances/knex';
import { UserRepositoryContract } from '../../app/contracts/repositories/user';

export const UserRepositoryKnexAdapter: UserRepositoryContract = () => {
  return {
    create: async (userData) => {
      const [user] = await knex.table('users').insert(userData).returning('*');
      return user;
    },
  };
};
