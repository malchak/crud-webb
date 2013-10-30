App.UsersEditController = Ember.ObjectController.extend({
	actions: {
		cancel: function(){
			if (this.content.isDirty){
				return this.get('transaction').rollback();
			}
			this.transitionToRoute('users.show', this.content);
		}
	}
});