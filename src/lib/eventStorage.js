var _ = require('underscore');

function EventStorage() {
    this.clubs = {};
}

EventStorage.prototype = {
    clubs: null,

    add: function(data, clubName) {
        this.clubs[clubName] = this.clubs[clubName] || [];
        this.clubs[clubName].push(data);
    },

    get: function (clubName) {
        return this.clubs[clubName] || [];
    }
};

module.exports = new EventStorage();
