"use strict";
exports.__esModule = true;
exports.loginUser = exports.registerUser = void 0;
var express_validator_1 = require("express-validator");
var auth_service_1 = require("../services/auth.service");
var registerUser = function (req, res) {
    var result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        return res.status(422).send(result.array({ onlyFirstError: true }));
    }
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    var user = (0, auth_service_1.registerService)({ name: name, email: email, password: password });
    if (!user)
        return res.status(400).json({ messages: "User Already Exists in Database" });
    return res.status(200).json({ message: "User Successfully Registered" });
};
exports.registerUser = registerUser;
var loginUser = function (req, res) {
    var result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        return res.status(422).send(result.array());
    }
    var _a = req.body, email = _a.email, password = _a.password;
    var user = (0, auth_service_1.loginService)({ email: email, password: password });
    if (!user)
        return res.status(400).json({ message: "Invalid username or password" });
    return res.status(200).json({ name: user.name });
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.controller.js.map