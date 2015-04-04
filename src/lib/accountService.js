var _ = require('underscore');

function AccountService(titles) {
    // TODO: get all events from AdminService
    this.events = {};
    var tmp = {};
    titles.forEach(
        function(item){
            tmp[item] = [10, 25, 100];
        }
    );
    this.events = tmp;
}

AccountService.prototype = {
    events: null,
    buyTickets: function (title, seats) {
        var free = this.showSeats(title);
        free.forEach(
            function(item, id){
                if (item < seats[id]){
                    throw new Error ("Validation error: Tickets amount overflow");
                }
            }
        );

        free.forEach(
            function(item, id){
                free[id] = item - seats[id];
            }
        );
    },

    showSeats: function (title) {
        return this.events[title];
    }
};

module.exports = AccountService;
