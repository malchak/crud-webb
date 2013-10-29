App.User = DS.Model.extend({
	firstName: DS.attr('string', {defaultValue: ''}),
	lastName: DS.attr('string', {defaultValue: ''}),
	quote: DS.attr('string', {defaultValue: ''}),
	
	fullName: (function(){
		return this.get('firstName') + " " + this.get('lastName');
	}).property('firstName', 'lastName')
});