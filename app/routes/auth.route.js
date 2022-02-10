"use strict";
exports.__esModule = true;
var express = require("express");
var authCtrl = require("../controllers/auth.controller");
var express_validator_1 = require("express-validator");
var Router = express.Router();
var registerValidation = [(0, express_validator_1.body)("name").isString(), (0, express_validator_1.body)("password").isString().isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1 }).withMessage("Password must be Minimum of 6 Characters with 1 Lowercase and 1 Uppercase"),
    (0, express_validator_1.body)("email").isString().isEmail().withMessage("Email must be a valid email address")];
var loginValidation = [(0, express_validator_1.body)("email").isString().isEmail().withMessage("Email must be a valid email address"),
    (0, express_validator_1.body)("password").isString().withMessage("Password must be a valid password")];
Router.use("/register", registerValidation, authCtrl.registerUser);
Router.use("/login", loginValidation, authCtrl.loginUser);
exports["default"] = Router;
//# sourceMappingURL=auth.route.js.map