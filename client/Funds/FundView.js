var FundView = Backbone.View.extend({
  
  tagName: 'div',
  
  template: _.template('<p><%= name %>, <%= city %>, <%= state_code %></p>'),
  // Startup Views are instantiated in StartupListView during render().
  initialize: function(){
    this.fundDetailView = new FundDetailView({model: this.model});
  },

  events: {
    'click' : 'toggleDetails'
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    this.$el.append(this.fundDetailView.render().hide());
    return this.$el;
  },

  toggleDetails: function(e){
    this.fundDetailView.$el.toggle();
  }

});
