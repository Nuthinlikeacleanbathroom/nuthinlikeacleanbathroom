var Funds = Backbone.Collection.extend({
  	url : '/funds',
    
    //Mean and variance for student's t distribution
    getMean: function(prop) {
      return _.reduce(this, function(memo, curr, i, collection) {
        memo += collection.at(0).get(prop);
        return memo;
      }, 0) / this.length;
    },
    getVariance: function(prop, mean) {
      return (1 / this.length - 1) * _.reduce(this, function(memo, curr, i, collection) {
        memo += Math.pow((collection.at(i).get(prop) - mean), 2);
      }, 0); 
    }
});
