var Startups = Backbone.Collection.extend({
	model: Startup,
  	url : '/startups',

	initialize: function(){
		(function init (_this){
			return $.ajax({
					url: 'http://127.0.0.1:8000/companies',
					method: 'GET'
				})
				.then(function(results) {
					console.log(results);
					results.forEach(function(result) {
						_this.add(new Startup(result));
					});
				})
			}
		)(this);
	}

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
