var AppModel = Backbone.Model.extend({

	initialize: function(collection){
		if (collection){
			this.set('startups', collection);
		}else{
			this.set('startups', new Startups());
			// this.get('startups').fetch();
		}
	}

})
