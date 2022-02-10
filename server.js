"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var app_1 = require("./app/app");
app_1["default"].listen(process.env.PORT, function () {
    console.log("listening on port " + process.env.PORT);
});
//# sourceMappingURL=server.js.map