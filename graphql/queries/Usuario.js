const UsuarioModel = require('../../models').Usuario

module.exports = {
    Usuario: {
        Query: {
            usuario: async (_, args) => await UsuarioModel.findOne({
                'username': args.username,
                'password': args.password,
                'estatus': true
            })
            .populate('organizacion')
            .exec(),
        }
    }
}