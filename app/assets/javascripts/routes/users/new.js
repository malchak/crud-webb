App.UsersNewRoute = Ember.Route.extend({
	model: function(){
		return this.store.createRecord('user');
	},
	setupController: function(controller, model){
		controller.set('content', model);
	}
});