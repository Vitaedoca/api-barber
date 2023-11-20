
exports.up = knex => knex.schema.createTable("user_client", table =>{

    table.increments("id");

    table.text("name");
    table.text("email");
    table.text("whatsapp");
    table.text("password");
    table.text("avatar");
    table.boolean("isAdmin");
    table.timestamp("created_at").default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable("user_client");