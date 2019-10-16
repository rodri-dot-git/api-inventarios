const UsuarioModel = require('../../models').Usuario
const rollbar = require('../../utils').rollbar

module.exports = {
    Usuario: {
        Mutation: {
            addUsuario: async (_, args) => {
                try {
                    var usuario = await new UsuarioModel(args).save()
                    rollbar.info('Usuario agregado correctamente')
                    return await usuario;
                } catch (error) {
                    rollbar.error(`Error en user fetch. error: ${error}`)
                }
            },
        }
    }
}