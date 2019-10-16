const UsuarioModel = require('../../models').Usuario
const rollbar = require('../../utils').rollbar
const shajs = require('sha.js')

module.exports = {
    Usuario: {
        Mutation: {
            addUsuario: async (_, args) => {
                try {
                    args.password = shajs('sha256').update(args.password).digest('hex')
                    var usuario = await new UsuarioModel(args).save()
                    rollbar.info('Usuario agregado correctamente')
                    return await usuario;
                } catch (error) {
                    rollbar.error(`Error en user fetch. error: ${error}`)
                    return error;
                }
            },
        }
    }
}