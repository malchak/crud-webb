App.UsersEditController = Ember.ObjectController.extend({
	actions: {
		cancel: function(){
			var user = this.get('model');
			user.rollback();
			this.transitionToRoute('users.show', this.content);
		},

		save: function(){
			var user = this.get('model');
			user.save();
			this.transitionToRoute('users.show', this.content);
		},

		destroy: function(){
			var user = this.get('model');
			user.deleteRecord();
			user.save();
			this.transitionToRoute('users');
		}
	}
});