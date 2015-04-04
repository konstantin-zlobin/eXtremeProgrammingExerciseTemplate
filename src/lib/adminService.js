var _ = require('underscore');

function AdminService() {
    this.events = [];
    this.requiredFields = ['title', 'date', 'time', 'singers', 'prices'];
}

AdminService.prototype = {
    events: null,
    requiredFields: null,

    addNewEvent: function (title, date, time, singers, prices) {
        var event = {
            title: title,
            date: date,
            time: time,
            singers: singers,
            prices: prices
        };

        this._validate(event);

        this.events.push(event);
        //console.log("Successfully added new event!!!");
    },

    _validate: function(event) {
        var key;
        for (key in this.requiredFields) {
            if (!(event[this.requiredFields[key]])) {
                throw new Error('Validation error: cannot add an event with an empty ' + this.requiredFields[key]);
            }
        }
    },

    showAllEvents: function () {
        return _.map(this.events, function (event) {
            return _.clone(event);
        });
    }
};

module.exports = AdminService;


