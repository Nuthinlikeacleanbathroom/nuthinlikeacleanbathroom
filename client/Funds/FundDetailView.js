var FundDetailView = Backbone.View.extend({

  template: _.template(
    '<div class="fundDetail container-fluid">' +
      '<h2 class="text-center"><%= name %></h2>' +
      '<div><strong>Location:</strong> <%= city %>,<%= state_code %></div>' +
      '<div><strong>Fund Homepage:</strong> <a href=<%= homepage_url %> ><%= homepage_url %></a></div>' +
      '<div><strong>Founded:</strong> <%= new Date(founded_at).toDateString() %></div>' +
      '<div class="invested_companies"><strong>Companies Invested:</strong> <%= invested_companies %></div>' +
      '<div class="investment_rounds"><strong>Investment Rounds:</strong> <%= investment_rounds %></div>' +
      '<div class="plot" data-detail="<%= id %>">' +
      '</div>' +
      '<br/><div><strong>Overview:</strong> <p><%= overview %></div>' +
    '</div>'),
  
  // Fund Detail views are instantiated during StartupView initialization.
  // They are subviews of StartupView
  initialize: function(){
  },

  render: function(){    
    var $html = this.$el.html(this.template(this.model.attributes));
    this.plot = d3.select($html[0]).select('.plot')
      .append('svg')
      .attr('background-color', '#000')
      .attr('heigth', '100%')
      .attr('width', '100%');
    return $html;
  },
  
  plotData: function(){
    this.plot.selectAll('circle').remove();
    
    var fundData = [
      {
        name: 'investment_rounds',
        val: this.model.get('investment_rounds')
      },
      {
        name: 'invested_companies',
        val: this.model.get('invested_companies')
      }
    ];
    
    var data = this.plot.selectAll('.datum')
      .data(fundData);
    
    data.enter().append('circle')
      .attr('class', function(datum) {
        return datum.name;
      })
      .attr('r', 0);
      
    this.plot.selectAll('circle')
      .transition()
      .attr('r', function(datum) {
        return datum.val / 50 * 8;
      })
      .delay(100)
      .duration(400);      
  }
});
