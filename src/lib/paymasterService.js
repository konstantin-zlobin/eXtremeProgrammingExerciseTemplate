var _ = require('underscore');
var AdminService = require('./adminService');

function PaymasterService() {
    this.selld = [];
    this.adminService = new AdminService;
}

PaymasterService.prototype = {
    adminService: null,
    selld: null,

    sell: function(eventTitle, type, club) {
        var event = this.adminService.getEventByTitleAndClub(eventTitle, club);

        var ticket = event.tickets[type].pop();
        return ticket ?  type + '_' + ticket : ticket;
    },

    getEventTicketsInfo: function(eventTitle, club) {
        var event = this.adminService.getEventByTitleAndClub(eventTitle, club);

        return {
            'vip': event.tickets['vip'].length,
            'table': event.tickets['table'].length,
            'enter': event.tickets['enter'].length
        };
    }
};

module.exports = PaymasterService;
