var VizView = Backbone.View.extend({
  render: function() {
    // Puts exactly one SVG element on #funds-graphics
    d3.select('#funds-graphics')
      .append('svg')
      .attr('height', '100%')
      .attr('width', '100%');
      
    this.canvas = d3.select('#funds-graphics').select('svg');
  },
  
  histogram: function(props) {
    props = Array.prototype.slice.call(arguments, 0);
    var range, counts;
    var color = 0x503070;
    
    this.empty();
    
    // Plot each property
    _.each(props, function(prop, i) {
      range = this.collection.getRange(100, prop);
      counts = [];
      
      var plotData = this.canvas.selectAll('circle')
        .data(this.collection.getPropValues(prop));
        
      plotData
        .enter()
        .append('circle')
        .attr('class', function(datum) {
          return datum.name;
        })
        .attr('class', 'plot-circle')
        .attr('cx', function(datum) {
          return Math.floor((datum.val - range.min) / range.step) + '%';
        })
        .attr('cy', function(datum) {
          var idx = Math.floor((datum.val - range.min) / range.step);
          counts[idx] = counts[idx] === undefined ? 0 : ++counts[idx];
          return (counts[idx] * range.step) + '%';
        })
        .attr('r', range.step - 2 + 'px')
    }, this);
  },
  
  empty: function() {
    this.canvas.selectAll('*').remove();
  },
  
  addToBottom: function(elem) {
    
  }
});