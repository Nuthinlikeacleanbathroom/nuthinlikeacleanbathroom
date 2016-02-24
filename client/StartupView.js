var StartupView = Backbone.View.extend({
  
  tagName: 'tr',
  
  template: _.template('<td><%= name %></td><td><%= city %></td><td><%= state_code %></td>'),

  initialize: function(){
    this.render();
  },

  events: {
    'click' : 'showDetails'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  showDetails: function(e){
    this.$el.children().detach();
    this.fundDetailView = new FundDetailView({model: this.model});
    return this.$el.append(this.fundDetailView.render());
  }

});
