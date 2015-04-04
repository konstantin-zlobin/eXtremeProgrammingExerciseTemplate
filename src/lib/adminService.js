var _ = require('underscore');

function AdminService() {
    this.events = [];
    this.ClubsPlaces = {
        Jazz: {
            'vip': initTickets(12),
            'table': initTickets(0),
            'enter': initTickets(70)
        },
        'Night Owl' : {
            'vip': initTickets(0),
            'table': initTickets(20),
            'enter': initTickets(120)
        }
    }
}

function initTickets(count) {
    var i = count;
    return Array.apply(null, Array(count)).map(function (value) {
        return i--;
    })
}

AdminService.prototype = {
    events: null,

    addNewEvent: function (title, date, stars, price, club) {
        club = club || 'Jazz';
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
            tickets: _.clone(this.ClubsPlaces[club]),
            club: club
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
