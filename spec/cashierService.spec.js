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
});
