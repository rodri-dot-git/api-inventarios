const OrganizacionModel = require('../../models').Organizacion

module.exports = {
    Organizacion: {
        Query: {
            usuario: async (_, args) => await OrganizacionModel.findOne({
                '_id': args.id
            }).exec(),
        }
    }
}