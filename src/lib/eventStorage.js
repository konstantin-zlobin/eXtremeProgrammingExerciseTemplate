var _ = require('underscore');

function EventStorage() {
    this.events = [];
}

EventStorage.prototype = {
    events: null,

    add: function(data) {
        data.tickets = {
            availableVIP: 10,
            availableSimple: 25,
            availableEntrance: 100
        };
        this.events.push(data);
    },

    get: function () {
        return this.events
    }

};

module.exports = EventStorage;


