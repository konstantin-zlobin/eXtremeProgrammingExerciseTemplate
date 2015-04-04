var _ = require('underscore');
var EventStorage = require('./eventStorage');

function AdminService() {
    this._storage = new EventStorage();
}

function validate(title, date, performers, ticketPriceVip, ticketPriceTables, ticketPriceEntrance) {
    var invalidFields = [];

    if (title == null) {
        invalidFields.push('title');
    }
    if (date == null) {
        invalidFields.push('date');
    }
    if (performers == null || performers.length == 0) {
        invalidFields.push('performers');
    }
    if (ticketPriceVip == null) {
        invalidFields.push('ticketPriceVip');
    }
    if (ticketPriceTables == null) {
        invalidFields.push('ticketPriceTables');
    }
    if (ticketPriceEntrance == null) {
        invalidFields.push('ticketPriceEntrance');
    }
    if(invalidFields.length > 0) {
       throw new Error("Validation error: " + invalidFields.join(', ') + " can not be empty!");
    }
}
AdminService.prototype = {
    _storage: null,

    addNewEvent: function (title, date, performers, ticketPriceVip, ticketPriceTables, ticketPriceEntrance) {
        validate(title, date, performers, ticketPriceVip, ticketPriceTables, ticketPriceEntrance);
        this._storage.add({
            title: title,
            date: date,
            performers: performers,
            ticketPriceVip: ticketPriceVip,
            ticketPriceTables: ticketPriceTables,
            ticketPriceEntrance: ticketPriceEntrance
        });
        //console.log("Successfully added new event!!!");
    },

    showAllEvents: function () {
        return _.map(this._storage.get(), function (event) {
            return _.clone(event);
        });
    }
};

module.exports = AdminService;


