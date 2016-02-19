app.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$el = options.el;
	},

	routes: {
		'' : 'index',
	},

	index: function(){
	}

});
