const UsuarioModel = require('../../models').Usuario

module.exports = {
    Usuario: {
        Query: {
            usuario: async (_, args) => await UsuarioModel.findOne({
                'username': args.username,
                'password': args.password
            })
            .populate('organizacion')
            .exec(),
            usuarioId: async (_, args) => await UsuarioModel.findOne({
                '_id': args.id 
            })
            .populate('organizacion')
            .exec()
        }
    }
}