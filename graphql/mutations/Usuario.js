const UsuarioModel = require('../../models').Usuario

module.exports = {
    Usuario: {
        Mutation: {
            addAlmacen: async (_, args) => {
                var usuario = new UsuarioModel(args)
                return await usuario.save();
            },
        }
    }
}