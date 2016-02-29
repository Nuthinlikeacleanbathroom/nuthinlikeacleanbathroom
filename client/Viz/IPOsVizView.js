var IPOsVizView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.canvas = d3.select('#ipo-graphics')
      .append('svg');

    var IPOData = {
      "name": "IPOs",
      "children": this.collection.models
    };

    var pack = d3.layout.pack()
      .sort(null)
      .size([500, 500])
      .value(function(d) { return d.attributes.raised_amount })
      .padding(2);

    this.plot = this.canvas
      .selectAll('g')
      .data(pack(IPOData)[0].children)
      .enter()
      .append('g');

    this.plot
      .append('circle')
      .attr('class', 'plot-circle')
      .attr('r', function(d) {
        return d.r;
      })
      .attr('cx', function(d) {
        return d.x;
      })
      .attr('cy', function(d) {
        return d.y;
      });

    this.plot
      .append("text")
      .attr('x', function(d) {
        return d.x;
      })
      .attr('y', function(d) {
        return d.y;
      })
      .attr("fill", "black")
      .style("text-anchor", "middle")
      .text(function(d) { return "Stock: " + d.attributes.stock_symbol + " | Raised: " +  d.attributes.raised_amount });

    this.canvas
      .attr('height', 1000)
      .attr('width', 1000);

    //console.log(this.collection);
    //console.log(this.collection.models);
  }
});