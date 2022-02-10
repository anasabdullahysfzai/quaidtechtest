"use strict";
exports.__esModule = true;
exports.validatePassword = exports.generatePasswordHash = void 0;
var crypto_1 = require("crypto");
var generatePasswordHash = function (password) {
    return (0, crypto_1.createHash)("sha256").update(password).digest("hex");
};
exports.generatePasswordHash = generatePasswordHash;
var validatePassword = function (password, previousHash) {
    var hash = (0, crypto_1.createHash)("sha256").update(password).digest("hex");
    if (hash === previousHash)
        return true;
    return false;
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=utils.js.map