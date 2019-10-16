const UsuarioModel = require('../../models').Usuario
const rollbar = require('../../utils').rollbar

module.exports = {
    Usuario: {
        Query: {
            usuario: async (_, args) => {
                try {
                    var res = await UsuarioModel.findOne({
                            'username': args.username,
                            'password': args.password
                        })
                        .populate('organizacion')
                        .exec();
                    rollbar.info('Login correcto')
                } catch (error) {
                    rollbar.error(`Error en login. error: ${error}`)
                }
                return res;
            },
            usuarioId: async (_, args) => {
                try {
                    var res = await UsuarioModel.findOne({
                            '_id': args.id
                        })
                        .populate('organizacion')
                        .exec();
                        rollbar.info('User fetch correcto')
                } catch (error) {
                    rollbar.error(`Error en user fetch. error: ${error}`)
                }
                return res;
            }
        }
    }
}