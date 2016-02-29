var IPOsVizView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    var size = 500;

    this.canvas = d3.select('#ipo-graphics')
      .append('svg')
      .attr('height', size)
      .attr('width', '100%');

    //Format data for d3.layout.pack
    var IPOData = {
      "name": "IPOs",
      "children": this.collection.models
    };

    //Specify layout of viz
    var pack = d3.layout.pack()
      .sort(null)
      .size([size, size])
      .value(function(d) { return d.attributes.raised_amount })
      .padding(2);

    //Create groups to contain circle and text pairs
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
      .style("visibility", "hidden")
      .text(function(d) { return "Stock: " + d.attributes.stock_symbol + " | Raised: $" +  d.attributes.raised_amount });

    //Show or hide text on hover
    this.plot
      .on('mouseover', function(type, listener) {
        d3.select(this).select("text").style("visibility", "visible");
      })
      .on('mouseleave', function() {
        d3.select(this).select("text").style("visibility", "hidden");
      });
  }
});