var _ = require('underscore');

describe('Account Service', function () {
    var AccountServiceContructor;
    var accountService;

    beforeAll(function () {
        AccountServiceConstructor = require('../src/lib/accountService');
    });

    beforeEach(function () {
        accountService = new AccountServiceConstructor(["Test event1", "Test event2"]);
    });

    afterEach(function () {

    });

    it('can buy an available tickets', function () {

        accountService.buyTickets("Test event1", [10, 25, 100]);
        accountService.buyTickets("Test event2", [10, 25, 100]);

        var free1 = accountService.showSeats("Test event1");
        var free2 = accountService.showSeats("Test event2");
        expect(free1).toEqual([0, 0, 0]);
        expect(free2).toEqual([0, 0, 0]);
    });

    // it('verify overflow', function () {
    //     accountService.buyTickets("Test event", [10, 25, 100]);

    //     expect(accountService.buyTickets("Test event", [10, 25, 100]);).toEqual([0, 0, 0);
    // });
});
