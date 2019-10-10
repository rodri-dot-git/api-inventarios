const Mongoose = require("mongoose")

const OrganizacionModel = Mongoose.model("Organizacion", {
    nombre: String
}, "organizacions");

module.exports.OrganizacionModel = OrganizacionModel