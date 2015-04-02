var _ = require('underscore');

function AdminService() {
    this.events = [];
}

AdminService.prototype = {
    events: null,
    addNewEvent: function (title, date) {
        if (_.isEmpty(title)) {
            throw new Error("Validation error: cannot add an event with an empty Title");
        }
        this.events.push({title: title, date: date});
        //console.log("Successfully added new event!!!");
    },
    showAllEvents: function () {
        return _.map(this.events, function (event) {
            return _.clone(event);
        });
    }
};

module.exports = AdminService;


