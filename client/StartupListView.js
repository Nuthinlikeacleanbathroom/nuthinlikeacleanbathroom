var StartupListView = Backbone.View.extend({
	tagName: 'table',
	initialize: function(StartupCollection){
		this.collection = StartupCollection;
		// this.render();
	},

	render: function(){
		this.$el.children().detach();
		
    console.log(this.collection);
		this.$el.html('<th></th>').append(
		  _.map(this.collection, function(startup){
      	console.log('creatingstartupviews');
		    return new StartupView({model: startup}).render();
		  })
		)
	}

})
