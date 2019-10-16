const OrganizacionModel = require('../../models').Organizacion
const rollbar = require('../../utils').rollbar

module.exports = {
    Organizacion: {
        Query: {
            organizacion: async (_, args) => {
                try {
                    var res = await OrganizacionModel.findOne({
                        '_id': args.id
                    }).exec();
                    rollbar.info('Organizacion fetch correcto');
                    return res;
                } catch (error) {
                    rollbar.error(`Error en inventario fetch. error: ${error}`);
                }
            }
        }
    }
}