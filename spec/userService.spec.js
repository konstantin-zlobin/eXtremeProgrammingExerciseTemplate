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
        adminService.addNewEvent("Test Title", new Date(2015, 5, 1, 19, 0),
                                 ["Bono", "2Pac"], [1000, 500, 100], 'Jazz');
        expect(adminService.showAllEvents('Jazz')[0].title).toEqual("Test Title");
        expect(adminService.showAllEvents('Jazz')[0].date).toEqual(new Date(2015, 5, 1, 19, 0));
        expect(adminService.showAllEvents('Jazz')[0].stars).toEqual(["Bono", "2Pac"]);
        expect(adminService.showAllEvents('Jazz')[0].price).toEqual([1000, 500, 100]);
    });

    it('cannot add an event with empty Title to the system', function () {
        expect(function() {
            adminService.addNewEvent("", new Date(2015, 5, 1, 19, 0),
                                     ["Bono", "2Pac"], [1000, 500, 100], 'Jazz');
        }).toThrow(new Error("Validation error: cannot add an event with an empty Title"));
        expect(_.isEmpty(adminService.showAllEvents('Jazz'))).toBeTruthy();
    });

    it('cannot add an event with current Date to the system', function () {
        expect(function() {
            adminService.addNewEvent("Test Title", new Date(),
                                     ["Bono", "2Pac"], [1000, 500, 100], 'Jazz');
        }).toThrow(
            new Error("Validation error: cannot add an event with today date or in the past"));
        expect(_.isEmpty(adminService.showAllEvents('Jazz'))).toBeTruthy();
    });

    it('cannot add an event with past Date to the system', function () {
        expect(function() {
            adminService.addNewEvent("Test Title", new Date(null),
                                     ["Bono", "2Pac"], [1000, 500, 100], 'Jazz');
        }).toThrow(
            new Error("Validation error: cannot add an event with today date or in the past"));
        expect(_.isEmpty(adminService.showAllEvents('Jazz'))).toBeTruthy();
    });

});
