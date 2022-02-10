"use strict";
exports.__esModule = true;
var express = require("express");
var auth_route_1 = require("./auth.route");
var Router = express.Router();
Router.use("/auth", auth_route_1["default"]);
exports["default"] = Router;
//# sourceMappingURL=index.route.js.map