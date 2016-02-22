var AppView = Backbone.View.extend({
	initialize: function(app){
		this.startupListView = new StartupListView({collection: this.model.get('startups')});
    this.model.get('startups').on('reset', this.render);
		this.render();
		
	},
	events:{

	},
	render: function(){
	  return this.$el.html(this.startupListView.$el);
	}

})
