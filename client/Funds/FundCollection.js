var Funds = Backbone.Collection.extend({
  	url : '/funds',
    
  getRange: function(steps, prop) {
    var range = _.reduce(this, function(memo, model, i, collection) {
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
        return memo;
      }, {min: null, max: null}, this.collection);
    range.step = (range.max - range.min) / steps;
    
    return range;
  },
  
  getPropValues: function(prop) {
    return _.map(this, function(model, i, collection) {
      return {
        name: prop,
        val: collection.at(i).get(prop),
      }
    }, this);
  },
});
