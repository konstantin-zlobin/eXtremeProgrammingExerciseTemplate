var _ = require('underscore');

describe('Admin Service', function () {
    var AdminServiceConstructor;
    var adminService;

    beforeAll(function () {
        AdminServiceConstructor = require('../src/lib/adminService');
    });

    beforeEach(function () {
        adminService = new AdminServiceConstructor();
    });

    afterEach(function () {

    });

    it('can add an event to the system', function () {
        adminService.addNewEvent("Test Title", new Date());
        expect(adminService.showAllEvents()[0].title).toEqual("Test Title");
    });

    it('cannot add an event with empty Title to the system', function () {
        expect(function() {
            adminService.addNewEvent(undefined, new Date());
        }).toThrow(new Error("Validation error: cannot add an event with an empty Title"));
        expect(_.isEmpty(adminService.showAllEvents())).toBeTruthy();
    });

});
