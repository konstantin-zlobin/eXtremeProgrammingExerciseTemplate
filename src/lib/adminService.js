var _ = require('underscore');

var EventStorage = require('./eventStorage');

function AdminService(options) {
    this.club = options.name;
    var defaultsOptions = {
        vip: 10,
        table: 50,
        enter: 100
    };
    this.options = _.extend({}, defaultsOptions, options);
    this._storage = EventStorage;
    this.events = [];
}

AdminService.prototype = {
    club: null,
    events: null,
    _storage: null,

    addNewEvent: function (event) {
        this._storage.add(event, this.club);
    },

    showAllEvents: function () {
        return _.map(this._storage.get(this.club).events, function (event) {
            return _.clone(event);
        });
    },

    searchEvent: function (events, title, startDate, endDate, performer) {
        return _.filter(this._storage[this.club], function (event) {
            return _.every([
                _.isEmpty(title) || event.title == title,
                _.isEmpty(startDate) || event.date >= startDate,
                _.isEmpty(endDate) || event.date <= endDate,
                _.isEmpty(performer) || _.contains(event.performer, performer)
            ], _.identity);
        });
    },

    //getEventByTitle: function (eventTitle) {
    //    return _.filter(this.events, function(event) {
    //        return event.title === eventTitle;
    //    }).shift();
    //},

    getTicketsInfo: function(type) {
        return this.options[type];
    }
};

module.exports = AdminService;


