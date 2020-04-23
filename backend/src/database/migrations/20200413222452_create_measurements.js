exports.up = function(knex) {
    return knex.schema.createTable('measurements', function (table){
        table.increments();
        table.datetime('measurementday').defaultTo(knex.fn.now());
        //pressão máxima
        table.float('systolic').notNullable();
        //pressão mínima
        table.float('diastolic').notNullable();

        table.string('id_patientuser').notNullable();
        table.string('id_medicuser').notNullable();

        table.foreign('id_patientuser').references('id').inTable('patientsusers');
        table.foreign('id_medicuser').references('id').inTable('medicusers');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('measurements');
};