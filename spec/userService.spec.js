var _ = require('underscore');

describe('User Service', function () {
    var UserServiceConstructor;
    var userService;

    beforeAll(function () {
        UserServiceConstructor = require('../src/lib/userService');
    });

    beforeEach(function () {
        userService = new UserServiceConstructor();
        userService._admin.addNewEvent(
            'Event 1',
            '2015-03-01',
            ['Bob', 'Alice'],
            100, 80, 50
        );
        userService._admin.addNewEvent(
            'Event 2',
            '2015-05-01',
            ['Alice', 'Marlo'],
            200, 10, 5
        );
        userService._admin.addNewEvent(
            'Event 3',
            '2015-04-10',
            ['Marlo'],
            205, 125, 56
        );
        userService._admin.addNewEvent(
            'Event 4',
            '2015-06-10',
            ['Marlo'],
            200, 120, 50
        );
    });

    afterEach(function () {

    });

    it('should search events for next month', function () {
        var result = userService.searchNextMonth('2015-04-04');

        result = _.map(result, function(event) {
            return event.title
        });

        expect(result).toEqual(['Event 2', 'Event 3']);
    });
});
