// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var StartupEntryView = Backbone.View.extend({

	tagName: 'tr',
	template: _.template('<td>(<%= compName %>)</td><td><%= location %></td>'),

	// events: { 
	// },

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}

});
