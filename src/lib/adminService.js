var _ = require('underscore');

function AdminService() {
    this.events = [];
}

function initTickets(count) {
    return Array.apply(null, Array(count)).map(function (value) {
        return true;
    })
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
            throw new Error("Validation error: cannot add an event with today date or in the past");
        }
        this.events.push({
            title: title,
            date: date,
            stars: stars,
            price: price,
            tickets: {
                'vip': initTickets(10),
                'table': initTickets(25),
                'enter': initTickets(100)
            }
        });
    },

    showAllEvents: function () {
        return _.map(this.events, function (event) {
            return _.clone(event);
        });
    },

    getEventByTitle: function (eventTitle) {
        return _.filter(this.events, function(event) {
            return event.title === eventTitle;
        }).shift();
    }
};

module.exports = AdminService;
