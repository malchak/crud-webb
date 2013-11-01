##Ember-Rails CRUD example

This app is a very straight forward example of how easy Ember.js and Ember-Data communicate with Rails throught Ember's RESTAdapter.

First, generate a new rails application:
 `rails new app`.
 
Update the gem file with `gem ember-rails`.

Then run: `rails g ember:bootstrap -n app`.

This will generate the Ember file structure, however, you must stick to Ember's suggested naming conventions accross folders.

There are some tutorials that will walk you through this same app, howeverEmber has been in rapid development, and those tutorials may not have been updated with the latest releases.

This app uses the canary version of Ember and Ember-Data.