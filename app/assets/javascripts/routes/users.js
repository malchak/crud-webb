App.UsersRoute = Ember.Route.extend({
	model: function() {
		return this.get('store').findAll('user');
	},
	setupController: function(controller, model){
		controller.set('content', model);
	}
});