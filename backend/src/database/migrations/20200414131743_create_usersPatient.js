exports.up = function(knex) {
    return knex.schema.createTable('patientusers', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('cpf', 11).notNullable();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.string('birthday', 10).notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

        table.string('id_medicuser').notNullable();

        table.foreign('id_medicuser').references('id').inTable('medicusers');
    })   
};

exports.down = function(knex) {
  return knex.schema.dropTable('patientusers');
};