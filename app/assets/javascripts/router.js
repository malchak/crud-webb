// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('users', function(){
  	this.route('new');
  	this.route('edit', {path: '/:user_id/edit'});
  	this.route('show', {path: '/:user_id'});
  });
});
