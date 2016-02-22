var AppView = Backbone.View.extend({
	initialize: function(){
		this.startupListView = new StartupListView({collection: this.model.get('startups')});
		console.log(this.model.get('startus'));
    this.model.get('startups').on("reset", this.render, this);
	},
	events:{

	},
	render: function(){
	  return this.$el.append(this.startupListView.render());
	}

})
