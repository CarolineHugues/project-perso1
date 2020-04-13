var video = document.querySelector('video');
var videoId = video.dataset.video;
var videoI = videoId - 1;
var background = document.getElementsByClassName('background');

$.getJSON('http://localhost/project-sass-music-travel/api/articles-data.php', function( data ) {
	background[0].style.backgroundImage = "url(" + data.result.articles[videoI].background +")";
});

video.addEventListener("play", function(){
	background[0].style.filter = 'blur(5px)';
});

video.addEventListener("pause", function(){
	background[0].style.filter = 'blur(0px)';
});