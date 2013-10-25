App.UsersRoute = Ember.Route.extend({
	model: function() {
		this.get('store').findAll('user');
	}
});