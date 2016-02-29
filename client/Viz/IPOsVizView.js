var IPOsVizView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.canvas = d3.select('#ipo-graphics')
      .append('svg');

    var flare = {
      "name": "IPOs",
      "children": this.collection.models
    }

    var pack = d3.layout.pack()
      .sort(null)
      .size([500, 500])
      .value(function(d) { return 1 })
      .padding(5);

    var data = pack(flare)
    data.shift();
      console.log(data);

    this.plot = this.canvas
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', function(d) {
        return d.r;
      })
      .attr('cx', function(d) {
        return d.x;
      })
      .attr('cy', function(d) {
        return d.y;
      });

    this.canvas
      .attr('height', 1000)
      .attr('width', 1000);

    //console.log(this.collection);
    //console.log(this.collection.models);
  }
});