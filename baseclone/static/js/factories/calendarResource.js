/**
 * Created by mollymendelsohn-carr on 11/6/14.
 */
baseclone.factory('iCal', function($resource) {
    return $resource('/proxy/calendars/:calendarID/calendar_events/:eventId.json', {
            // Parameter defaults
        },
        {
            update: {method: 'PUT'}
        }
    );
});