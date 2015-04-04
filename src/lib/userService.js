var _ = require('underscore');
var AdminService = require('./adminService');

function UserService() {
    this._admin = new AdminService()
}

UserService.prototype = {
    _admin: null,

    searchNextMonth: function (dateFrom) {
        var events = this._admin.showAllEvents();
        return _.filter(events, function(event) {
            var current = new Date(dateFrom),
                eventDate = new Date(event.date),
                next = new Date(dateFrom);
            next.setDate(next.getDay() + 30);
            return (
                next.getTime() > eventDate.getTime() &&
                current.getTime() < eventDate.getTime()
            );
        });
    }
};

module.exports = UserService;


