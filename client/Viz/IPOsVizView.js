var IPOsVizView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.canvas = d3.select('#ipo-graphics')
      .append('svg');

    var pack = d3.layout.pack()
      .sort(null)
      .size([500, 500])
      .value(function(d) { return d.raised_amount })
      .padding(5);

      console.log(pack.nodes(this.collection.models));

    this.plot = this.canvas
      .selectAll('circle')
      .data(this.collection.models)
      .enter()
      .append('circle')
      .attr('r', function(d) {
        return 3;
      });

    this.canvas
      .attr('height', 1000)
      .attr('width', 1000);

    //console.log(this.collection);
    //console.log(this.collection.models);
  }
});