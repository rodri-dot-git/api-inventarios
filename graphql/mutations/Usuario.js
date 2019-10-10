const UsuarioModel = require('../../models').Usuario

module.exports = {
    Usuario: {
        Mutation: {
            addUsuario: async (_, args) => {
                var usuario = new UsuarioModel(args)
                return await usuario.save();
            },
        }
    }
}