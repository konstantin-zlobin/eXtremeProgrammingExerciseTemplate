var _ = require('underscore');

function UserService() {
    this.events = [];
}

UserService.prototype = {
    events: null
};



module.exports = UserService;
