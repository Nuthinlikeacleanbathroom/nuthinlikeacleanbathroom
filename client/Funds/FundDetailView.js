var FundDetailView = Backbone.View.extend({

  template: _.template(
    '<div class="fundDetail container-fluid">' +
      '<h2 class="text-center"><%= name %></h2>' +
      '<div><strong>Location:</strong> <%= city %>,<%= state_code %></div>' +
      '<div><strong>Fund Homepage:</strong> <a href=<%= homepage_url %> ><%= homepage_url %></a></div>' +
      '<div><strong>Founded:</strong> <%= new Date(founded_at).toDateString() %></div>' +
      '<div><strong>Companies Invested:</strong> <%= invested_companies %></div>' +
      '<div><strong>Investment Rounds:</strong> <%= investment_rounds %></div>' +
      '<br/><div><strong>Overview:</strong> <p><%= overview %></div>' +
    '</div>'),
  
  // Fund Detail views are instantiated during StartupView initialization.
  // They are subviews of StartupView
  initialize: function(){
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
