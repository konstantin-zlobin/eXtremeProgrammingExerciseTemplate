var _ = require('underscore');

function AdminService() {
    this.events = [];
}

AdminService.prototype = {
    events: null,
    addNewEvent: function (title, date, stars, price) {
        if (_.isEmpty(title)) {
            throw new Error("Validation error: cannot add an event with an empty Title");
        }
        dateNow = new Date();
        dateNow.setHours(23);
        dateNow.setMinutes(60);
        if (date < dateNow) {
            throw new Error("Validation error: cannot add an event with today date or in past");
        }
        this.events.push({title: title,
                          date: date,
                          stars: stars,
                          price: price});
        //console.log("Successfully added new event!!!");
    },
    showAllEvents: function () {
        return _.map(this.events, function (event) {
            return _.clone(event);
        });
    }
};

module.exports = AdminService;
