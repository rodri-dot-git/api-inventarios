const AlmacenModel = require('../../models/Almacen').AlmacenModel
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Mutation: {
        addAlmacen: async (_, args) => {
            var almacen = new AlmacenModel(args)
            return await almacen.save();
        },
    }
}