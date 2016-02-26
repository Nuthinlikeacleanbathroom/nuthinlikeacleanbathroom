var FundDetailView = Backbone.View.extend({

  template: _.template(
    '<div class="fundDetail container-fluid">' +
      '<h2 class="text-center"><%= name %></h2>' +
      '<div><strong>Location:</strong> <%= city %>,<%= state_code %></div>' +
      '<div><strong>Fund Homepage:</strong> <a href=<%= homepage_url %> ><%= homepage_url %></a></div>' +
      '<div><strong>Founded:</strong> <%= new Date(founded_at).toDateString() %></div>' +
      '<div class="invested"><strong>Companies Invested:</strong> <%= invested_companies %></div>' +
      '<div class="rounds"><strong>Investment Rounds:</strong> <%= investment_rounds %></div>' +
      '<div class="plot" data-detail="<%= id %>">' +
      '</div>' +
      '<br/><div><strong>Overview:</strong> <p><%= overview %></div>' +
    '</div>'),
  
  // Fund Detail views are instantiated during StartupView initialization.
  // They are subviews of StartupView
  initialize: function(){
  },

  render: function(mean, variance, n){
    this.mean = mean;
    this.variance = variance;
    this.n = n;
    
    var $html = this.$el.html(this.template(this.model.attributes));
    this.plot = d3.select($html[0]).select('.plot')
      .append('svg')
      .attr('background-color', '#000')
      .attr('heigth', '100%')
      .attr('width', '100%');
    return $html;
  },
  
  plotData: function(){
    var mean = this.mean;
    var variance = this.variance;
    var n = this.n;
    var rect = this.el.getElementsByTagName('svg')[0].getBoundingClientRect();
    var svgHeight = rect.height; 
  
    this.plot.selectAll('circle').remove();
    
    var fundData = [
      {
        name: 'rounds',
        val: this.model.get('investment_rounds')
      },
      {
        name: 'invested',
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
        var t = (datum.val - mean) * n / Math.sqrt(variance);
        return t * svgHeight;
      })
      .delay(100)
      .duration(400);      
  }
});
