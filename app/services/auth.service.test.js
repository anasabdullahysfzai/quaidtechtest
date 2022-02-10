"use strict";
exports.__esModule = true;
var auth_service_1 = require("./auth.service");
describe("Register Service", function () {
    beforeEach(function () {
    });
    it("Register User Successfully", function () {
        expect((0, auth_service_1.registerService)({ name: "Anas", email: "test@gmail.com", password: "Admin@123" })).not.toBeNull();
    });
    it("Should not register user with existing email", function () {
        (0, auth_service_1.registerService)({ name: "Anas", email: "test@gmail.com", password: "Admin@123" });
        expect((0, auth_service_1.registerService)({ name: "Anas", email: "test@gmail.com", password: "Admin@123" })).toBeNull();
    });
});
describe("Login Service", function () {
    beforeEach(function () {
        (0, auth_service_1.registerService)({ name: "Anas", email: "test@gmail.com", password: "Admin@123" });
    });
    it("Should Login Successfully", function () {
        expect((0, auth_service_1.loginService)({ email: "test@gmail.com", password: "Admin@123" })).not.toBeNull();
    });
    it("Should Not Login Successfully", function () {
        expect((0, auth_service_1.loginService)({ email: "test@gmail.com", password: "test" })).toBeNull();
    });
});
//# sourceMappingURL=auth.service.test.js.map