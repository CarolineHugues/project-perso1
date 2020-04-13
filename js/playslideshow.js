$(function(){

	function getData(){
		var widthArticle = $("#slideshow article:first-child").width();
		slideshowData = {
			width: widthArticle,
			speed: 2000,
			interval: 5000
		}

		return slideshowData;
	}

	function next(){
		var data = getData();
		$("#slideshow article:first-child").animate({"margin-left": -data.width}, data.speed, function(){  
	        $(this).css("margin-left",0).appendTo("#slideshow");  
	    }); 
	}

	function previous(){
		var data = getData();
		$("#slideshow article:last-child").css("margin-left",-data.width).prependTo("#slideshow");
		$("#slideshow article:first-child").animate({"margin-left": 0}, data.speed);	
	}

	function playSlideshow(){
		var data = getData();
		auto = setInterval(next, data.interval);  
	}

	playSlideshow();

	$("#arrow-left").on('click', function(){
		clearInterval(auto);
		previous();
   		playSlideshow();
   });

	$("#arrow-right").on('click', function(){
		clearInterval(auto);
   		next();  
    	playSlideshow();
   });
});