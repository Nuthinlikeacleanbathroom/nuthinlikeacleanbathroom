var VizView = Backbone.View.extend({
  render: function() {
    this.canvas = d3.select('#funds-graphics')
      .append('svg')
      .attr('height', '100%')
      .attr('width', '100%');
  }
});