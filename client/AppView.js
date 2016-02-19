var AppView = Backbone.View.extend({
	initialize: function(){
		this.startupListView = new StartupListView({collection: this.model.get('Startups')});
		this.render();
	},
	events:{
		this.model.get('Startups').on("sync", this.render)
	},
	render: function(){
		StartupListView({collection: startul})
	}

})
