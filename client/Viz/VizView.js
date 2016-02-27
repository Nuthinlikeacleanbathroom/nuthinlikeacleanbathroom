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
        
      plotData.enter()
        .append('circle')
        .attr('class', function(datum) {
          return datum.name;
        })
        .attr('class', 'plot-circle')
        .attr('cx', function(datum, i) {
          // Ensures relative positions of circles
          return Math.floor((datum.val - range.min) / range.step) * .75 + .5 + '%';
        })
        .attr('cy', 0)
        
        .attr('cy', function(datum) {
          // Get count for each data bucket
          var idx = Math.floor((datum.val - range.min) / range.step);
          counts[idx] = counts[idx] === undefined ? 0 : ++counts[idx];
          datum.height = (counts[idx] * range.step) + range.step + 'px';
          return range.step;
        })
        .attr('r', range.step - 2 + 'px');
        
        // Resize the canvas
        var max = _.reduce(counts, function(max, val) {
          if (val > max) {
            return val;
          } else {
            return max;
          }
        }, 0);
        
      var canvasHeight = (max + 2) * range.step;
        
      this.canvas.transition()
        .attr('height', canvasHeight);
      
      this.canvas.selectAll('circle').transition()
        .attr('cy', function(datum) {
          return datum.height;
        })
        .duration(500);
        
      this.canvas
        .on('mouseover', function(type, listener) {
          d3.select(this).append('text')
            .attr('x', '45%')
            .attr('y', '85%')
            .attr('class', prop)
            .html('Histogram of ' + prop + ' values');
        })
        .on('mouseleave', function() {
          d3.select(this).selectAll('text').remove();
        });
    }, this);    
  },
  
  empty: function() {
    this.canvas.selectAll('*').remove();
  },
  
  addToBottom: function(elem) {
    //TODO?
  }
});