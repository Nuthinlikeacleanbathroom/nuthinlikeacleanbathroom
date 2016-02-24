var StartupView = Backbone.View.extend({
  
  tagName: 'tr',
  
  template: _.template('<td><%= name %></td><td><%= city %></td><td><%= state_code %></td>'),

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
