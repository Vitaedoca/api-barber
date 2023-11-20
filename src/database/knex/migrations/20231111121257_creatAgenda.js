
exports.up = knex => knex.schema.createTable("agenda", table => {
    table.increments("id");

    table.text("name");
    table.text("start");
    table.text("end");
    table.integer("user_id").references("id").inTable("user_barber").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("agenda");
