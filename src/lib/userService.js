var _ = require('underscore');

function SearchEvent(events, title, startDate, endDate, performer) {
        return _.filter(events, function (event) {
            return _.every([
                _.isEmpty(title) || event.title == title,
                _.isEmpty(startDate) || event.date >= startDate,
                _.isEmpty(endDate) || event.date <= endDate,
                _.isEmpty(performer) || _.contains(event.performer, performer),
            ], _.identity);
        });
}

function NextMonth(events) {
    startDate = new Date();
    endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    return SearchEvent(events, null, today, startDate, endDate, null);
}
