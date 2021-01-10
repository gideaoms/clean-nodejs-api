import Knex from 'knex';
import { DB_CLIENT, DB_HOST, DB_NAME, DB_PASS, DB_USER } from '../envs/database';

const knex = Knex({
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
});

export default knex;
