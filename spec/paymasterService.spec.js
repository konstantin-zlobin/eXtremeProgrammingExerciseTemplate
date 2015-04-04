var _ = require('underscore');

describe('Paymaster Service', function () {
    var PaymasterServiceConstructor;
    var paymasterService;

    function fill(paymasterService) {
        paymasterService.adminService.addNewEvent("Event 1", new Date(2015, 5, 1, 19, 0),
            ["Bono", "2Pac"], [1000, 500, 100], 'Jazz');
        paymasterService.adminService.addNewEvent("Event 2", new Date(2015, 5, 1, 19, 0),
            ["Bono", "2Pac"], [1000, 500, 100], 'Night Owl');
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
        expect(paymasterService.sell('Event 1', 'vip', 'Jazz')).toEqual('vip_1');
    });

    it('should get info about free places', function () {
        expect(paymasterService.getEventTicketsInfo('Event 1', 'Jazz')).toEqual({vip: 12, table: 0, enter: 70});
        expect(paymasterService.getEventTicketsInfo('Event 2', 'Night Owl')).toEqual({vip: 0, table: 20, enter: 120});

        paymasterService.sell('Event 1', 'vip', 'Jazz');
        expect(paymasterService.getEventTicketsInfo('Event 1', 'Jazz')).toEqual({vip: 11, table: 0, enter: 70});

        paymasterService.sell('Event 1', 'enter', 'Jazz');
        expect(paymasterService.getEventTicketsInfo('Event 1', 'Jazz')).toEqual({vip: 11, table: 0, enter: 69});

        paymasterService.sell('Event 2', 'table', 'Night Owl');
        expect(paymasterService.getEventTicketsInfo('Event 2', 'Night Owl')).toEqual({vip: 0, table: 19, enter: 120});

        paymasterService.sell('Event 2', 'enter', 'Night Owl');
        expect(paymasterService.getEventTicketsInfo('Event 2', 'Night Owl')).toEqual({vip: 0, table: 19, enter: 119});
    });

    it('should sell ticket', function () {
        var id1 = paymasterService.sell('Event 1', 'vip', 'Jazz');
        var id2 = paymasterService.sell('Event 1', 'vip', 'Jazz');
        expect(id1).not.toEqual(id2);
    });

});
