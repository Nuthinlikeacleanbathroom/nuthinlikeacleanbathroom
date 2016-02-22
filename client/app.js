var AppModel = Backbone.Model.extend({

	initialize: function(){
	  this.set('startups', new Startups());
		this.get('startups').fetch({reset: true});
	}

})
