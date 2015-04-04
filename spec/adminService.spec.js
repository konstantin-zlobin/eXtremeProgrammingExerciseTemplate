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

        var validDate = new Date(currentDate.getMilliseconds() + 30 * 60 * 60 * 24 * 1000);

        expect(adminService.addNewEvent(
          'New Mega Event', // title
          validDate, // datetime
          [
            'Mc. Jackson',
            'Mick Jagger'
          ], // list of singers
          {
              'vip': 300,
              'seat': 200,
              'enter': 100
          } // prices
        )).toEqual(true);

        expect(adminService.showAllEvents()[0].title).toEqual('New Mega Event');
        expect(adminService.showAllEvents()[0].datetime).toBeDefined();
        expect(adminService.showAllEvents()[0].singers).toEqual(['Mc. Jackson', 'Mick Jagger']);
        expect(adminService.showAllEvents()[0].prices).toEqual({
            'vip': 300,
            'seat': 200,
            'enter': 100
        });
    });

    it('verify input errors', function () {
        expect(adminService.addNewEvent()).toEqual(false);

        expect(adminService.errors.title).toEqual('Validation error: cannot add an event with an empty title');
        expect(adminService.errors.datetime).toEqual('Validation error: cannot add an event with an empty datetime');
        expect(adminService.errors.singers).toEqual('Validation error: cannot add an event with an empty singers');
        expect(adminService.errors.prices).toEqual('Validation error: cannot add an event with an empty prices');
    });
});
