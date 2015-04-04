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
        adminService.addNewEvent(
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
        );

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

    it('cannot add an event with empty Title to the system', function () {
        expect(function() {
            adminService.addNewEvent(undefined, new Date());
        }).toThrow(new Error('Validation error: cannot add an event with an empty title'));
        expect(_.isEmpty(adminService.showAllEvents())).toBeTruthy();
    });

});
