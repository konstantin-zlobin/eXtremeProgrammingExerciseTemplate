var _ = require('underscore');

var AdminService = require('./adminService');

function UserService() {
    this._admin = new AdminService()
}

UserService.prototype = {

    _admin: null,

    nextMonth: function (events) {
        startDate = new Date();
        endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1);

        return this._admin.searchEvent(events, null, new Date(), startDate, endDate, null);
    },

    bookSimpleTicket: function (title, date, events) {
        var event = this._admin.searchEvent(events, title, date, date);
        event.simpleTicketsBooked += 1;
        return true;
    }

};

module.exports = UserService;
