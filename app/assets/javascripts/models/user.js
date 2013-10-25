App.User = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	quote: DS.attr('string')
});