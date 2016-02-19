 var Startup = Backbone.Model.extend({
	defaults: {
		name: "",
		city: "",
		state: "",
		fundingStatus: "",
		active: true
	},
  
  initialize: function(params) {
    this.name = params.name;
    this.state = params.state_code;
    this.city = params.city;
  }
})
