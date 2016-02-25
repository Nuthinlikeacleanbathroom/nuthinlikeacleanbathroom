var FundDetailView = Backbone.View.extend({

  template: _.template(
    '<div class="fundDetail container-fluid" data-detail="<%= id %>">' +
      '<h2 class="text-center"><%= name %></h2>' +
      '<div><strong>Location:</strong> <%= city %>,<%= state_code %></div>' +
      '<div><strong>Fund Homepage:</strong> <a href=<%= homepage_url %> ><%= homepage_url %></a></div>' +
      '<div><strong>Founded:</strong> <%= new Date(founded_at).toDateString() %></div>' +
      '<div><strong>Companies Invested:</strong> <%= invested_companies %></div>' +
      '<div><strong>Investment Rounds:</strong> <%= investment_rounds %></div>' +
      '<div class="plot">' +
      '</div>' +
      '<br/><div><strong>Overview:</strong> <p><%= overview %></div>' +
    '</div>'),
  
  // Fund Detail views are instantiated during StartupView initialization.
  // They are subviews of StartupView
  initialize: function(){
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },
  
  plotData: function(){    
    var plot = d3.select('.fundDetail[data-detail="' + this.model.get('id') + '"].plot')
      .append('svg')
      .attr('background-color', '#000')
      .attr('class', 'fundPlot')
      .attr('heigth', 100)
      .attr('width', 200);
    var data = plot.selectAll('.datum')
      .data([this.model.get('invested_companies'), this.model.get('funding_rounds')]);
    
    data.enter().append('circle')
      .attr('class', 'datum')
      .attr('cy', 50)
      .attr('cx', 100)
      .attr('r', function(datum) {
        return datum;
      });
      
    data.exit().remove();
  }
});
