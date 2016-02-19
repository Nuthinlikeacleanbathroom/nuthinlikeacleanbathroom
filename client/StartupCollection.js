var Startups = Backbone.Collection.extend({
	model: Startup,
  	url : "/startups",

	// initialize: function(){
	//
	// }

	// update: function(model){
		// 	$.ajax({
		// 		url: "/startups",	 	// confirm
		// 		type: 'GET',
		// 		contentType: 'application/json',
		// 		data: ,
		// 		success: function(data) {
		// 			// expect: json?
		// 			// data.forEach(function(startup){
		// 				// new model
		// 			// })
		// 			// this.trigger('create')
		// 		},
		// 		error: function(data) {
		// 			console.error('Failed to Fetch');
		// 		}
		// 	});
	// }


})
