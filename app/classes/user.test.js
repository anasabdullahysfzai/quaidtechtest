"use strict";
exports.__esModule = true;
var user_class_1 = require("./user.class");
var user;
describe("User Class Test", function () {
    beforeEach(function () {
        user = new user_class_1["default"]("testname", "testemail", "testpasswordhash");
    });
    it("Has `name` attribute", function () {
        expect(user).toHaveProperty("name");
    });
    it("Has `email` attribute", function () {
        expect(user).toHaveProperty("email");
    });
    it("Has `passwordHash` attribute", function () {
        expect(user).toHaveProperty("passwordHash");
    });
    it("Stores name , email and passwordHash", function () {
        expect(user.name).toEqual("testname");
        expect(user.email).toEqual("testemail");
        expect(user.passwordHash).toEqual("testpasswordhash");
    });
});
//# sourceMappingURL=user.test.js.map