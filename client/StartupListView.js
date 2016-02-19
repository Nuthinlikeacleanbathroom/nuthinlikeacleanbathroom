var StartupListView = Backbone.View.extend({
	tagName: "table",
	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.children().detach();
    		console.log(this.collection);
		this.$el.html('<th></th>').append(
			this.collection.map(function(startup){
        			console.log('creatingstartupviews');
				return new StartupView({model: startup}).render();
			})
		)
	}

})
