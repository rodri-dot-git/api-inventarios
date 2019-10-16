const dotenv = require("dotenv")
var Rollbar = require("rollbar");
dotenv.config()

var rollbar = new Rollbar({
    accessToken: process.env.ROLLBAR_API_KEY,
    captureUncaught: true,
    captureUnhandledRejections: true
});

module.exports.rollbar = rollbar