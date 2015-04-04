var _ = require('underscore');

describe('User Service', function () {

    var AdminServiceConstructor;
    var adminService, userService;
    var currentDate = new Date();
    var nextMonthdate = new Date();
    nextMonthdate.setMonth(nextMonthdate.getMonth() + 1);

    beforeAll(function () {
        AdminServiceConstructor = require('../src/lib/adminService');
        UserServiceConstructor = require('../src/lib/userService');
        adminService = new AdminServiceConstructor();
        userService = new UserServiceConstructor();
        [2, 3, 4].forEach(function (i) {
            var date = new Date();
            date.setDate(i);
            var endDate = new Date();
            endDate.setMonth(nextMonthdate.getMonth() + 1);
            endDate.setDate(i);
            adminService.addNewEvent({
                title: 'Test Title',
                date: date,
                performers: ['Lady Gaga', 'Beatles'],
                vipPrice: 100,
                simplePrice: 50,
                enterPrice: 20,
                club: 'Owl'
            });
            adminService.addNewEvent({
                title: 'Test Title',
                date: endDate,
                performers: ['Lady Gaga', 'Beatles'],
                vipPrice: 100,
                simplePrice: 50,
                enterPrice: 20,
                club: 'Owl'
            });
        });
    });

    beforeEach(function () {

    });

    afterEach(function () {

    });

});
