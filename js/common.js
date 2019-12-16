$(document).ready(function(){

	var userFeed = new Instafeed({
	  get: 'user',
	  userId: '3095949657',
	  limit: '12',
	  resolution: 'standard_resolution',
	  template: '<div class="instaitem"><a href="{{image}}" title="{{caption}} target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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

//video var player = document.getElementById("video");player.playbackRate = 0.8;



//carusel

function slideOne(){
	$(".photo-slider-list div:nth-child(3)").removeClass().addClass("selected");
	$(".photo-slider-list div:last-child").removeClass().addClass("nextRightSecond");
	$(".photo-slider-list div:nth-child(4)").removeClass().addClass("next");
	$(".photo-slider-list div:nth-child(2)").removeClass().addClass("prev");
	$(".photo-slider-list div:first-child").removeClass().addClass("prevLeftSecond");
	$(".slider-button").removeClass("slider-button--active");
	$(".slider-button-1").addClass("slider-button--active");
}

function slideTwo(){
	$(".photo-slider-list div:nth-child(4)").removeClass().addClass("selected");
	$(".photo-slider-list div:last-child").removeClass().addClass("next");
	$(".photo-slider-list div:nth-child(3)").removeClass().addClass("prev");
	$(".photo-slider-list div:nth-child(2)").removeClass().addClass("prevLeftSecond");
	$(".photo-slider-list div:first-child").removeClass().addClass("nextRightSecond");
	$(".slider-button").removeClass("slider-button--active");
	$(".slider-button-2").addClass("slider-button--active");
}

function slideThree(){
	$(".photo-slider-list div:last-child").removeClass().addClass("selected");
	$(".photo-slider-list div:nth-child(4)").removeClass().addClass("prev");
	$(".photo-slider-list div:nth-child(3)").removeClass().addClass("prevLeftSecond");
	$(".photo-slider-list div:nth-child(2)").removeClass().addClass("nextRightSecond");
	$(".photo-slider-list div:first-child").removeClass().addClass("next");
	$(".slider-button").removeClass("slider-button--active");
	$(".slider-button-3").addClass("slider-button--active");
}

function slideFour(){
	$(".photo-slider-list div:first-child").removeClass().addClass("selected");
	$(".photo-slider-list div:last-child").removeClass().addClass("prev");
	$(".photo-slider-list div:nth-child(4)").removeClass().addClass("prevLeftSecond");
	$(".photo-slider-list div:nth-child(3)").removeClass().addClass("nextRightSecond");
	$(".photo-slider-list div:nth-child(2)").removeClass().addClass("next");
	$(".slider-button").removeClass("slider-button--active");
	$(".slider-button-4").addClass("slider-button--active");
};

function slideFive(){
	$(".photo-slider-list div:nth-child(2)").removeClass().addClass("selected");
	$(".photo-slider-list div:last-child").removeClass().addClass("prevLeftSecond");
	$(".photo-slider-list div:nth-child(4)").removeClass().addClass("nextRightSecond");
	$(".photo-slider-list div:nth-child(3)").removeClass().addClass("next");
	$(".photo-slider-list div:first-child").removeClass().addClass("prev");
	$(".slider-button").removeClass("slider-button--active");
	$(".slider-button-5").addClass("slider-button--active");
}

$(".photo-slider-list div:nth-child(3)").click(slideOne);
$(".photo-slider-list div:nth-child(4)").click(slideTwo);
$(".photo-slider-list div:last-child").click(slideThree);
$('.photo-slider-list div:first-child').click(slideFour);
$(".photo-slider-list div:nth-child(2)").click(slideFive);
$(".slider-button-1").click(function(){
	$(".slider-button").removeClass("slider-button--active");
	$(this).addClass("slider-button--active");
	$(document).ready(slideOne);
});
$(".slider-button-2").click(function(){
	$(".slider-button").removeClass("slider-button--active");
	$(this).addClass("slider-button--active");
	$(document).ready(slideTwo);
});
$(".slider-button-3").click(function(){
	$(".slider-button").removeClass("slider-button--active");
	$(this).addClass("slider-button--active");
	$(document).ready(slideThree);
});
$(".slider-button-4").click(function(){
	$(".slider-button").removeClass("slider-button--active");
	$(this).addClass("slider-button--active");
	$(document).ready(slideFour);
});
$(".slider-button-5").click(function(){
	$(".slider-button").removeClass("slider-button--active");
	$(this).addClass("slider-button--active");
	$(document).ready(slideFive);
});

$(".slider-arrow--right").click(function(){
	if($(".photo-slider-list div:nth-child(3)").hasClass("selected")){
		$(document).ready(slideTwo);
	}else if($(".photo-slider-list div:nth-child(4)").hasClass("selected")){
		$(document).ready(slideThree);
	}else if($(".photo-slider-list div:last-child").hasClass("selected")){
		$(document).ready(slideFour);
	}else if($(".photo-slider-list div:first-child").hasClass("selected")){
		$(document).ready(slideFive);
	}else if($(".photo-slider-list div:nth-child(2)").hasClass("selected")){
		$(document).ready(slideOne);
	};
});

$(".slider-arrow--left").click(function(){
	if($(".photo-slider-list div:nth-child(3)").hasClass("selected")){
		$(document).ready(slideFive);
	}else if($(".photo-slider-list div:nth-child(4)").hasClass("selected")){
		$(document).ready(slideOne);
	}else if($(".photo-slider-list div:last-child").hasClass("selected")){
		$(document).ready(slideTwo);
	}else if($(".photo-slider-list div:first-child").hasClass("selected")){
		$(document).ready(slideThree);
	}else if($(".photo-slider-list div:nth-child(2)").hasClass("selected")){
		$(document).ready(slideFour);
	};
});

