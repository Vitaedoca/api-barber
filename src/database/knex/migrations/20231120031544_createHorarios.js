
exports.up = knex => knex.schema.createTable("horarios", table =>{

    table.increments("id");

    table.text("horario");
    table.integer("user_id").references("id").inTable("user_barber").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("horarios");