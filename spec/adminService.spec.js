var _ = require('underscore');
var AdminServiceConstructor = require('../src/lib/adminService');

describe('Admin Service', function () {

    var adminService;
    var currentDate = new Date();

    beforeEach(function () {
        adminService = new AdminServiceConstructor({name: 'Owl'});
    });

    afterEach(function () {

    });

    xit('can add an event to the system', function () {
        //adminService.addNewEvent("Test Title", new Date());
        var date = new Date(currentDate.getMilliseconds() + 1000 * 60 * 60 * 24 * 30); // month ahead
        adminService.addNewEvent({
            title: 'Test Title',
            date: date,
            performers: ['Lady Gaga', 'Beatles'],
            vipPrice: 100,
            simplePrice: 50,
            enterPrice: 20
        });
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

describe('Admin Service Creation Test', function () {
    it('Should create an independent storages', function () {
        var Jazz = new AdminServiceConstructor({name: 'Jazz', vip: 100});
        var Owl = new AdminServiceConstructor({name: 'Night Owl', vip: 230});

        expect(Jazz.getTicketsInfo('vip')).toEqual(100);
        expect(Owl.getTicketsInfo('vip')).toEqual(230);
    });
});