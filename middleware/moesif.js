const moesifExpress = require('moesif-express');
const dotenv = require("dotenv")
dotenv.config()

const moesifMiddleware = moesifExpress({
    applicationId: process.env.MOESIF_APPLICATION_ID,
    logBody: true,
});

module.exports.moesifMiddleware = moesifMiddleware