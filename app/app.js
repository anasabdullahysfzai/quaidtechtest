"use strict";
exports.__esModule = true;
var express = require("express");
var helmet_1 = require("helmet");
var cors = require("cors");
var index_route_1 = require("./routes/index.route");
var app = express();
app.use((0, helmet_1["default"])());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', index_route_1["default"]);
exports["default"] = app;
//# sourceMappingURL=app.js.map