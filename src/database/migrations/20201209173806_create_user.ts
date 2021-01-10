import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.enum('status', ['active', 'inactive']).defaultTo('active');
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable('users');
};
