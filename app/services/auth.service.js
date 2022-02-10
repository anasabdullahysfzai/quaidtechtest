"use strict";
exports.__esModule = true;
exports.loginService = exports.registerService = void 0;
var user_class_1 = require("../classes/user.class");
var utils_1 = require("../config/utils");
var DB = [];
var registerService = function (user) {
    var name = user.name, email = user.email, password = user.password;
    var foundUsers = DB.filter(function (userFromDB) {
        return userFromDB.email === email;
    });
    if (foundUsers.length > 0)
        return null;
    var newUser = new user_class_1["default"](name, email, (0, utils_1.generatePasswordHash)(password));
    DB.push(newUser);
    return { name: name, email: email, password: password };
};
exports.registerService = registerService;
var loginService = function (credentials) {
    var email = credentials.email, password = credentials.password;
    var foundUsers = DB.filter(function (userFromDB) {
        return userFromDB.email === email;
    });
    if (foundUsers.length <= 0)
        return null;
    var user = foundUsers[0];
    if ((0, utils_1.validatePassword)(password, user.passwordHash)) {
        return { name: user.name, email: user.email, password: password };
    }
    return null;
};
exports.loginService = loginService;
//# sourceMappingURL=auth.service.js.map