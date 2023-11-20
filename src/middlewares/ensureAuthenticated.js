const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const AuthConfig = require("../configs/auth");
const knex = require("../database/knex");

async function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("JWT Token não informado", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, AuthConfig.jwt.secret);

        const user = await knex("user_barber").where({ id: user_id }).first();

        if (!user) {
            throw new AppError("Usuário não encontrado", 401);
        }

        request.user = {
            id: Number(user_id),
            isAdmin: user.isAdmin // Supondo que você tenha um campo isAdmin no modelo de usuário
        };

        if (!request.user.isAdmin) {
            throw new AppError("Acesso negado. Permissões de administrador necessárias", 403);
        }

        return next();
    } catch (error) {
        throw new AppError("JWT Token inválido", 401);
    }
}

module.exports = ensureAuthenticated;
