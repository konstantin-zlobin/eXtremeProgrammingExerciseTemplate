var _ = require('underscore');

function EventStorage() {
    this.events = [];
}

EventStorage.prototype = {
    events: null,

    add: function(data) {
        this.events.push(data);
    },

    get: function () {
        return this.events;
    }
};

module.exports = EventStorage;


