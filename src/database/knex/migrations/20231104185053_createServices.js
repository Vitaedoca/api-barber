
exports.up = knex => knex.schema.createTable("services", table => {
    table.increments("id");

    table.text("name");
    table.text("value");
    table.text("duration");
    table.integer("user_id").references("id").inTable("user_barber").onDelete("CASCADE");
    table.text("image");
    table.timestamp("created_at").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("services");
