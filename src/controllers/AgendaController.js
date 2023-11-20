const knex = require("../database/knex");
class AgendaController {

    async create(request, response) {

        const { name, start, end } = request.body;

        const user_id = request.user.id;

        await knex("agenda").insert({
            name,
            start,
            end,
            user_id
        })


        return response.json({name, start, end, user_id});
    }

    async update(request, response) {
        const { name, start, end } = request.body;

        const { id } = request.params;

        const user = await knex("agenda").where({ id }).update({
            name,
        })

        return response.json({user});
    }
    
    async show (request, response) {
        const user_id = request.user.id;

        const agenda = await knex("agenda").where({ user_id });

        return response.json({agenda});
    }

    async delete(request, response) {
        const { id } = request.params;


        await knex("agenda").where({id}).delete();


        return response.json();
    }
}

module.exports = AgendaController;