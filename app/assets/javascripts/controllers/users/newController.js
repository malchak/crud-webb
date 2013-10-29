App.UsersNewController = Ember.ObjectController.extend({
	actions: {
		save: function(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var quote = this.get('quote');

			var user = this.store.createRecord('user', {
				firstName: firstName,
				lastName: lastName,
				quote: quote
			});
			user.save();
			this.set("firstName", "");
			this.set("lastName", "");
			this.set("quote", "");
			this.transitionToRoute('users');
		},

		cancel: function(){
			this.get('content').deleteRecord('user');
    	this.transitionToRoute('users');
		}
	},
	
	headerTitle: 'Create',
	buttonTitle: 'Create'
});