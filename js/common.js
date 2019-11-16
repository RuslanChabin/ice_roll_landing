$(document).ready(function(){

	var userFeed = new Instafeed({
	  get: 'user',
	  userId: '3095949657',
	  limit: '12',
	  resolution: 'standard_resolution',
	  template: '<div class="instaitem col-3 m-4 mb-5"><a href="{{image}}" title="{{caption}} target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	  accessToken: '3095949657.1677ed0.745c759d24894ab782c120c3bd1367a9'
	});
	
 	userFeed.run();
	
	var btn = $('#button');
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	
	$(function(){
			$('#button').click(function(){
				$('html, body').animate({scrollTop: 0}, 600);
				return false;
			});
		});
	$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
	});
});

//video

var player = document.getElementById("video");
player.playbackRate = 0.4;

