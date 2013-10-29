App.UsersShowRoute = Ember.Route.extend({
	model: function(params) {
		App.User.find(params.user_id);
	},
	setupController: function(controller, model){
		controller.set('content', model);
	}
});