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

    getListOfSoldTickets: function() {

    },

    getListOfBookedTickets: function() {

    }
};

module.exports = CashierService;


