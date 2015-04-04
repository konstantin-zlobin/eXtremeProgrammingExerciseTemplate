var _ = require('underscore');

describe('Cashier Service', function () {
    var AdminServiceConstructor;
    var adminService;
    var CashierServiceConstructor;
    var cashierService;

    beforeAll(function () {
        CashierServiceConstructor = require('../src/lib/cashierService');
        AdminServiceConstructor = require('../src/lib/adminService')
    });

    beforeEach(function () {
        adminService = new AdminServiceConstructor();
        cashierService = new CashierServiceConstructor(adminService);
    });

    afterEach(function () {

    });

    it('admin service should be defined', function () {

        expect(cashierService._adminService).toBeDefined();

    });

    it('can get list of free places', function() {
        var date = new Date();
        adminService.addNewEvent("Test Title", date, ["Prince", "ALisa", "Bricks"], 3.5, 2.99, 1.29);
        var places = cashierService.getAvailablePlaces("Test Title");
        expect(places.availableVIP).toEqual(10);
        expect(places.availableSimple).toEqual(25);
        expect(places.availableEntrance).toEqual(100);
    });
});
