var _ = require('underscore');

function AdminService() {
    this.events = [];
    this.requiredFields = ['title', 'datetime', 'singers', 'prices'];
    this.errors = {};
}

AdminService.prototype = {
    events: null,
    requiredFields: null,
    errors: null,

    /**
     *
     * @param title
     * @param date
     * @param time
     * @param singers
     * @param prices
     * @returns {boolean} success
     */
    addNewEvent: function (title, datetime, singers, prices) {
        var event = {
            title: title,
            datetime: datetime,
            singers: singers,
            prices: prices
        };

        var hasErrors = this._validate(event);
        if (!hasErrors) {
            return false;
        }

        this.events.push(event);
        //console.log("Successfully added new event!!!");

        return true;
    },

    _validate: function(event) {
        var key;
        for (key in this.requiredFields) {
            if (!(event[this.requiredFields[key]])) {
                this.errors[this.requiredFields[key]] = 'Validation error: cannot add an event with an empty ' + this.requiredFields[key];
            }
        }

        return Object.keys(this.errors).length === 0
    },

    showAllEvents: function () {
        return _.map(this.events, function (event) {
            return _.clone(event);
        });
    }
};

module.exports = AdminService;


