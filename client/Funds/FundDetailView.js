var FundDetailView = Backbone.View.extend({

  template: _.template(
    '<div class="fundDetail container-fluid">' +
      '<h2 class="text-center"><%= name %></h2>' +
      '<div class="col-md-4 text-center"><strong>Location:</strong> <%= city %>,<%= state_code %></div>' +
      '<div class="col-md-4 text-center"><strong>Fund Homepage:</strong> <a href=<%= homepage_url %> ><%= homepage_url %></a></div>' +
      '<div class="col-md-4 text-center"><strong>Founded:</strong> <%= new Date(founded_at).toDateString() %></div>' +
      '<div class="col-md-6 text-center"><strong>Companies Invested:</strong> <%= invested_companies %></div>' +
      '<div class="col-md-6 text-center"><strong>Investment Rounds:</strong> <%= investment_rounds %></div>' +
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
