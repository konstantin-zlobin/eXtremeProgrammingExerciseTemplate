var _ = require('underscore');

function CashierService(adminService) {
    this._adminService = adminService;
}

CashierService.prototype = {
    _adminService: null,

    bookTicket: function (event, type) {

    },

    sellTicket: function (event, type) {

    },

    getAvailablePlaces: function(eventTitle) {

        return _.clone(this._adminService.getEventByTitle(eventTitle).tickets);
    }
};

module.exports = CashierService;


