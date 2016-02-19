var StartupListView = Backbone.View.extend({
	tagName: "table",
	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.children().detach();
		this.$el.html('<th></th>').append(
			this.collection.map(function(song){
				return new StartupEntryView({model: song}).render();
			})
		)
	}
})
