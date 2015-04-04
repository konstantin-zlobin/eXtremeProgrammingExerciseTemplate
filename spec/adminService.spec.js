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
        expect(adminService.addNewEvent(
          'New Mega Event', // title
          '20.04', // date
          '13:45', // time
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
        expect(adminService.showAllEvents()[0].date).toEqual('20.04');
        expect(adminService.showAllEvents()[0].time).toEqual('13:45');
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
        expect(adminService.errors.date).toEqual('Validation error: cannot add an event with an empty date');
        expect(adminService.errors.time).toEqual('Validation error: cannot add an event with an empty time');
        expect(adminService.errors.singers).toEqual('Validation error: cannot add an event with an empty singers');
        expect(adminService.errors.prices).toEqual('Validation error: cannot add an event with an empty prices');
    });
});
