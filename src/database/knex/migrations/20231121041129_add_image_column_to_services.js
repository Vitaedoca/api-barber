exports.up = knex => knex.schema.table("services", table => {
    table.text("image"); // Adicionando uma nova coluna 'image' do tipo texto
});

exports.down = knex => knex.schema.table("services", table => {
    table.dropColumn("image"); // Caso precise desfazer a migração, remove a coluna 'image'
});