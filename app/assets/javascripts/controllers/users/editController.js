App.UsersEditController = Ember.ObjectController.extend({
	actions: {
		cancel: function(){
			var user = this.get('model');
			user.rollback();
			this.transitionToRoute('users.show', this.content);
		}
	}
});