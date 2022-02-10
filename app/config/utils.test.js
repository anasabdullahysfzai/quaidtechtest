"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var hash;
describe("User Class Test", function () {
    beforeEach(function () {
        hash = (0, utils_1.generatePasswordHash)("test");
    });
    it("generate correct hash multiple times", function () {
        expect(hash).toEqual((0, utils_1.generatePasswordHash)("test"));
    });
    it("verifies the password correctly", function () {
        expect((0, utils_1.validatePassword)("test", hash)).toEqual(true);
    });
});
//# sourceMappingURL=utils.test.js.map