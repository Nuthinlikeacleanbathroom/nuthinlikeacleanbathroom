var VizView = Backbone.View.extend({
  render: function() {
    // Puts exactly one SVG element on #funds-graphics
    this.canvas = d3.select('#funds-graphics')
      .selectAll('svg')
      .data([0])
      .enter()
      .append('svg')
      .attr('height', '100%')
      .attr('width', '100%');
  },
  
  histogram: function(props) {
    props = Array.prototype.slice.call(arguments, 0);
    var range;
    var color = 0x503070;
    
    this.canvas.data([], function(datum) { 
      return datum;
    });
    
    this.canvas.selectAll('*').remove();
    
    _.each(props, function(prop, i) {
      range = this.getRange();
      
      var plotData = this.canvas
        .data(this.getPropValues(prop));
        
        plotData.enter()
        .append('circle')
        .attr('class', function(datum) {
          return datum.name;
        })
        .attr('class', 'plot-circle')
        .attr('cx', function(datum) {
          return datum.val
        })
        .attr('cy', function(datum) {
          
        })
    }, this);
    
    
  },
  
  getRange: function() {
    return _.reduce(this.collection, function(memo, model, i, collection) {
        if (i === 0) {
          memo.min = collection.at(i).get(prop);
          memo.max = collection.at(i).get(prop);
        }
        
        if (collection.at(i).get(prop) < memo.min) {
          memo.min = collection.at(i).get(prop);
        }
        
        if (collection.at(i).get(prop) > memo.max) {
          memo.max = collection.at(i).get(prop);
        }
      }, {min: null, max: null}, this.collection);
  },
  
  getPropValues: function(prop) {
    return _.map(this.collection, function(model, j, collection) {
      return {
        name: prop,
        val: collection.at(j).get(prop),
        color: color
      }
    }, this.collection);
  },
  
  addToBottom: function(elem) {
    
  }
});