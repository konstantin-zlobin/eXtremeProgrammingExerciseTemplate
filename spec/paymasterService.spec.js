var _ = require('underscore');

describe('Paymaster Service', function () {
    var PaymasterServiceConstructor;
    var paymasterService;

    function fill(paymasterService) {
        paymasterService.adminService.addNewEvent("Event 1", new Date(2015, 5, 1, 19, 0),
            ["Bono", "2Pac"], [1000, 500, 100]);
    }

    beforeAll(function () {
        PaymasterServiceConstructor = require('../src/lib/paymasterService');
    });

    beforeEach(function () {
        paymasterService = new PaymasterServiceConstructor();
        fill(paymasterService);
    });

    afterEach(function () {

    });

    it('should sell ticket', function () {
        expect(paymasterService.sell('Event 1', 'vip')).toEqual('vip_1');
    });

    it('should get info about free places', function () {
        expect(paymasterService.getEventTicketsInfo('Event 1')).toEqual({vip: 10, table: 25, enter: 100});

        paymasterService.sell('Event 1', 'vip');
        expect(paymasterService.getEventTicketsInfo('Event 1')).toEqual({vip: 9, table: 25, enter: 100});

        paymasterService.sell('Event 1', 'table');
        expect(paymasterService.getEventTicketsInfo('Event 1')).toEqual({vip: 9, table: 24, enter: 100});

        paymasterService.sell('Event 1', 'enter');
        expect(paymasterService.getEventTicketsInfo('Event 1')).toEqual({vip: 9, table: 24, enter: 99});
    });

    it('should sell ticket', function () {
        var id1 = paymasterService.sell('Event 1', 'vip');
        var id2 = paymasterService.sell('Event 1', 'vip');
        expect(id1).not.toEqual(id2);
    });

});
