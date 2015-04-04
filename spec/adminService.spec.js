var _ = require('underscore');

describe('Admin Service', function () {

    var AdminServiceConstructor;
    var adminService;
    var currentDate = new Date();

    beforeAll(function () {
        AdminServiceConstructor = require('../src/lib/adminService');
    });

    beforeEach(function () {
        adminService = new AdminServiceConstructor();
    });

    afterEach(function () {

    });

    it('can add an event to the system', function () {
        //adminService.addNewEvent("Test Title", new Date());
        var date = new Date(currentDate.getMilliseconds() + 1000 * 60 * 60 * 24 * 30); // month ahead
        adminService.addNewEvent({
            title: 'Test Title',
            date: date,
            performers: ['Lady Gaga', 'Beatles'],
            vipPrice: 100,
            simplePrice: 50,
            enterPrice: 20
        })
        expect(adminService.showAllEvents()[0].title).toEqual("Test Title");
        expect(adminService.showAllEvents()[0].date).toEqual(date);
        expect(adminService.showAllEvents()[0].performers).toBeDefined();
        expect(adminService.showAllEvents()[0].vipPrice).toEqual(100);
        expect(adminService.showAllEvents()[0].simplePrice).toEqual(50);
        expect(adminService.showAllEvents()[0].enterPrice).toEqual(20);
    });

    it('cannot add an event with empty Title to the system', function () {
        //expect(function() {
        //    adminService.addNewEvent(undefined, new Date());
        //}).toThrow(new Error("Validation error: cannot add an event with an empty Title"));
        //expect(_.isEmpty(adminService.showAllEvents())).toBeTruthy();
    });

});
