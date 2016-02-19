var StartupView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template('<td><%= name %></td><td><%= city %></td><td><%= state %></td>'),

	initialize: function(){
		this.render();
	},

	events: { 
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}

});
