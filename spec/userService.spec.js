var _ = require('underscore');

describe('User Service', function () {

    var UserServiceConstructor;
    var AdminServiceConstructor;
    var userService;
    var adminService;
    var currentDate = new Date();

    beforeAll(function () {
        UserServiceConstructor = require('../src/lib/userService');
        AdminServiceConstructor = require('../src/lib/adminService');
    });

    beforeEach(function () {
        adminService = new AdminServiceConstructor();
        userService = new UserServiceConstructor(adminService);
    });

    afterEach(function () {

    });

    it('can get list of upcoming events', function () {


    });

});
