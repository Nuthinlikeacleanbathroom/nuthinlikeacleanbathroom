var AppModel = Backbone.Model.extend({
	initialize: function(){
	  this.set('funds', new Funds());
		this.get('funds').fetch({reset: true});

    this.set('ipos', new IPOs());
    this.get('ipos').fetch({reset: true});
	}
});
