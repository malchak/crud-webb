App.UsersRoute = Ember.Route.extend({
	model: function() {
		return this.get('store').findAll('user');
	}
});