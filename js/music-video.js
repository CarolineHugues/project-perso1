ajaxGet("http://localhost/project-sass-music-travel/api/articles-data.php", function (response) {
    var element = document.getElementsByTagName('video')[0];
    var videoid = element.getAttribute('data-video');
    var data = JSON.parse(response);
    var i = videoid - 1; 
    var article = data.result.articles[i];

    var videoElt = document.createElement("source");
    videoElt.setAttribute("src", "http://localhost/project-sass-music-travel/videos/" + article.link);
    element.appendChild(videoElt);

    var section = document.getElementById('head');
    var title1Elt = document.createElement("h1");
    title1Elt.textContent = article.title;
    var title2Elt = document.createElement("h2");
    title2Elt.textContent = article.description;
    section.appendChild(title1Elt);
    section.appendChild(title2Elt);
});