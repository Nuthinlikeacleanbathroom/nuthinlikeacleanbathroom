var AppModel = Backbone.Model.extend({
	initialize: function(){
	  this.set('funds', new Funds());
		this.get('funds').fetch({
      reset: true,
      success: function(funds, result) {
        var mean = funds.getMean('invested_companies');
        var variance = funds.getVariance('invested_companies', mean);
        
        funds.set('mean', mean);
        funds.set('variance', variance);
      }
    });
	}
});
