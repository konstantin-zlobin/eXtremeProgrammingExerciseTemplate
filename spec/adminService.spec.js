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
        var date = new Date();
        adminService.addNewEvent("Test Title", date, ["Prince", "ALisa", "Bricks"], 3.5, 2.99, 1.29);
        expect(adminService.showAllEvents()[0].title).toEqual("Test Title");
        expect(adminService.showAllEvents()[0].date).toEqual(date);
        expect(adminService.showAllEvents()[0].performers).toEqual(["Prince", "ALisa", "Bricks"]);
        expect(adminService.showAllEvents()[0].ticketPriceVip).toEqual(3.5);
        expect(adminService.showAllEvents()[0].ticketPriceTables).toEqual(2.99);
        expect(adminService.showAllEvents()[0].ticketPriceEntrance).toEqual(1.29);
    });

        it('cannot add an event with empty Title to the system', function () {
            expect(function() {
                adminService.addNewEvent(undefined, new Date());
            }).toThrow(new Error("Validation error: title, performers, ticketPriceVip, ticketPriceTables, ticketPriceEntrance can not be empty!"));
            expect(_.isEmpty(adminService.showAllEvents())).toBeTruthy();
        });
        it('cannot add an event with just Title to the system', function () {
            expect(function() {
                adminService.addNewEvent('MegaConcert!');
            }).toThrow(new Error("Validation error: date, performers, ticketPriceVip, ticketPriceTables, ticketPriceEntrance can not be empty!"));
            expect(_.isEmpty(adminService.showAllEvents())).toBeTruthy();
    });
});

