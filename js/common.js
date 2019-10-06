$(document).ready(function(){

	var userFeed = new Instafeed({
	  get: 'user',
	  userId: '6792532565',
	  limit: '12',
	  resolution: 'standard_resolution',
	  template: '<div class="col-3 mb-3"><a href="{{image}}" title="{{caption}} target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid rounded-lg border border-secondary"/></a></div>',
	  accessToken: '6792532565.1677ed0.92eab687a05e457c8a511d76e7470d73'
	});

 	userFeed.run();

});
