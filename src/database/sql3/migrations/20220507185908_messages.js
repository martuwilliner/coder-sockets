/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary();
        table.string('user').notNullable();
        table.string('text').notNullable();
        table.timestamp('date').defaultTo(knex.fn.now());
    }
    );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('messages');
};
