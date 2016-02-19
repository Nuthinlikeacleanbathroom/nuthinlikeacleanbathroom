 var Startup = Backbone.Model.extend({
	rootUrl: "/company/",
	defaults: {
		compName: "",
		location: "",
		fundingStatus: "",
		active: false
	}
})
